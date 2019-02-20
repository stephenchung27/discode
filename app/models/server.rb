# frozen_string_literal: true

class Server < ApplicationRecord
  validates :admin_id, :server_name, presence: true

  before_create :randomize_path

  belongs_to :admin,
             foreign_key: :admin_id,
             class_name: :User

  has_many :memberships,
           foreign_key: :server_id,
           class_name: :ServerMembership

  has_many :members,
           through: :memberships,
           source: :member

  has_many :server_channels,
           foreign_key: :server_id,
           class_name: :ServerChannel

  has_many :chat_channels,
           through: :server_channels,
           source: :chat_channel

  has_one_attached :avatar

  def randomize_path
    begin
      path = format('%.18i', SecureRandom.random_number(999_999_999_999_999_999))
    end while Server.where(path: path).exists?
    self.path ||= path
  end
end
