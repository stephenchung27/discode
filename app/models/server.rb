class Server < ApplicationRecord
  validates :admin_id, :server_name, :path, presence: true

  after_initialize :randomize_id

  belongs_to :admin,
             foreign_key: :admin_id,
             class_name: :User

  has_many :memberships,
           foreign_key: :server_id,
           class_name: :ServerMembership

  has_many :members,
           through: :memberships,
           source: :member

  def randomize_id
    begin
      path = "%.18i" % SecureRandom.random_number(999999999999999999)
    end while Server.where(path: path).exists?
    self.path ||= path
  end
end
