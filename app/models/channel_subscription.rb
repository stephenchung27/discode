class ChannelSubscription < ApplicationRecord
  validates :user_id, :chat_channel_id, :is_direct_message, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :chat_channel,
    foreign_key: :chat_channel_id,
    class_name: :ChatChannel

  def is_direct_message?
    self.is_direct_message
  end
end