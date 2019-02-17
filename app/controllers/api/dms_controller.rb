class Api::DmsController < ApplicationController
  before_action :ensure_logged_on

  def index
    @chat_subscriptions = ChannelSubscription.includes(chat_channel: :users).where(is_direct_message: true, user_id: current_user.id)
    render :index
  end

  def create
    @recipient = User.find(params[:recipient_id])
    @chat_channel = ChatChannel.new(channel_name: "#{@recipient.username} - #{current_user.username}")

    if @recipient && @chat_channel.save
      recipient_subscription = ChannelSubscription.create!(user_id: @recipient.id, chat_channel_id: @chat_channel.id, is_direct_message: true)
      sender_subscription = ChannelSubscription.create!(user_id: current_user.id, chat_channel_id: @chat_channel.id, is_direct_message: true)

      render :show
    end
  end

  def destroy
    @chat_channel.find()
  end
end