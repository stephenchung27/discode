# frozen_string_literal: true

class Api::DmsController < ApplicationController
  before_action :ensure_logged_on

  def index
    @chat_subscriptions = ChannelSubscription.includes(chat_channel: :users).where(is_direct_message: true, user_id: current_user.id)
    render :index
  end

  def create
    @recipient = User.find(params[:recipient_id])

    if @recipient
      @chat_channel = ChatChannel.where(channel_name: "#{@recipient.username}##{@recipient.discriminator} - #{current_user.username}##{current_user.discriminator}").or(ChatChannel.where(channel_name: "#{current_user.username}##{current_user.discriminator} - #{@recipient.username}##{@recipient.discriminator}"))

      if @chat_channel.exists?
        @chat_channel = @chat_channel.first
        render :show
      else
        @chat_channel = ChatChannel.new(channel_name: "#{@recipient.username}##{@recipient.discriminator} - #{current_user.username}##{current_user.discriminator}")
        @chat_channel.save!

        recipient_subscription = ChannelSubscription.create!(user_id: @recipient.id, chat_channel_id: @chat_channel.id, is_direct_message: true)
        sender_subscription = ChannelSubscription.create!(user_id: current_user.id, chat_channel_id: @chat_channel.id, is_direct_message: true)

        render :show
      end
    else
      render json: ['User does not exist'], status: 404
    end
  end

  def destroy
    chat_channel = ChatChannel.find(params[:id])
    chat_channel.destroy!

    render json: params[:id]
  end
end
