# frozen_string_literal: true

class ChatChannel < ApplicationRecord
  validates :channel_name, presence: true

  has_one :server_channel_memberships,
          foreign_key: :chat_channel_id,
          class_name: :ServerChannel

  has_one :server,
          through: :server_channel_memberships,
          source: :server

  has_many :channel_messages,
           foreign_key: :channel_id,
           class_name: :ChannelMessage,
           dependent: :destroy

  has_many :channel_subscriptions,
           foreign_key: :chat_channel_id,
           class_name: :ChannelSubscription,
           dependent: :destroy

  has_many :users,
           through: :channel_subscriptions,
           source: :user

  before_create :create_identifier
  before_create :randomize_path

  private

  def create_identifier
    begin
      identifier = rand(36**5).to_s(36)
    end while ChatChannel.exists?(identifier: identifier)
    self.identifier ||= identifier
  end

  def randomize_path
    begin
      path = format('%.18i', SecureRandom.random_number(999_999_999_999_999_999))
    end while Server.where(path: path).exists?
    self.path ||= path
  end
end
