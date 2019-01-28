class ChatChannel < ApplicationRecord
  validates :channel_name, :server_id, :identifier, presence: true
  validates :channel_name, uniqueness: {scope: :server_id}

  belongs_to :server

  has_many :channel_messages,
           foreign_key: :channel_id,
           class_name: :ChannelMessage

  after_initialize :create_identifier
  after_initialize :randomize_path

  private

  def create_identifier
    begin
      identifier = rand(36 ** 5).to_s(36)
    end while ChatChannel.exists?(identifier: identifier)
    self.identifier ||= identifier
  end

  def randomize_path
    begin
      path = "%.18i" % SecureRandom.random_number(999999999999999999)
    end while Server.where(path: path).exists?
    self.path ||= path
  end
end
