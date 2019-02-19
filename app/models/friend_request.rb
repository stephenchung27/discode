class FriendRequest < ApplicationRecord
  validate :not_self

  belongs_to :user
  belongs_to :friend, class_name: :User

  def accept
    user.friends << friend
    destroy
  end

  private

  def not_self
    errors.add(:friend, "can't be equal to user") if user == friend
  end
end
