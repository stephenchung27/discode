class User < ApplicationRecord
  validates :username, :discriminator, :email, :session_token, :password_digest,
    presence: true
  validates :email, :session_token, uniqueness: true
  validates :discriminator, uniqueness: {scope: :username}
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_discriminator
  after_initialize :ensure_session_token

  has_many :adminned_servers,
    foreign_key: :admin_id,
    class_name: :Server,
    dependent: :destroy

  has_many :server_memberships,
    foreign_key: :member_id,
    class_name: :ServerMembership

  has_many :servers,
    through: :server_memberships,
    source: :server

  has_one_attached :avatar

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
    nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def ensure_discriminator
    discriminator = self.generate_discriminator
    until is_unique_discriminator?(self.username, discriminator)
      discriminator = self.generate_discriminator
    end
    self.discriminator ||= discriminator
  end

  def generate_discriminator
    "%.4i" % SecureRandom.random_number(9999)
  end

  def is_unique_discriminator?(username, discriminator)
    !User.exists?(username: username, discriminator: discriminator)
  end
end
