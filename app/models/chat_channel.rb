class ChatChannel < ApplicationRecord
  validates :channel_name, :server_id, :identifier, presence: true
  validates :channel_name, uniqueness: {scope: :server_id}

  belongs_to :server

  after_initialize :create_identifier

  private

  def create_identifier
    begin
      identifier = rand(36**5).to_s(36)
    end while ChatChannel.exists?(identifier: identifier)
    self.identifier ||= identifier
  end
end