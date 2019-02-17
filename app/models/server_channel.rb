# frozen_string_literal: true

class ServerChannel < ApplicationRecord
  validates :server_id, :chat_channel_id, presence: true

  belongs_to :server,
             foreign_key: :server_id,
             class_name: :Server

  belongs_to :chat_channel,
             foreign_key: :chat_channel_id,
             class_name: :ChatChannel
end
