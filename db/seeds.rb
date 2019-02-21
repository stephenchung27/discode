# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users

# # Demo User

wumpus = User.new(username: "Wumpus", email: "demo@demo.com", password: "starwars")
file = EzDownload.open('https://s3.amazonaws.com/discode/seeds/wumpus.png')
wumpus.avatar.attach(io: file, filename: 'wumpus.png')
wumpus.save!

# # App Academy TAs

andrew = User.new(username: "Andrew", email: "alangston@appacademy.io", password: "starwars")
file = EzDownload.open('https://s3.amazonaws.com/discode/seeds/andrew.jpeg')
andrew.avatar.attach(io: file, filename: 'andrew.jpeg')
andrew.save!

brian = User.new(username: "Brian", email: "bscott@appacademy.io", password: "starwars")
file = EzDownload.open('https://s3.amazonaws.com/discode/seeds/brian.jpeg')
brian.avatar.attach(io: file, filename: 'brian.jpeg')
brian.save!

david = User.new(username: "David", email: "ddickinson@appacademy.io", password: "starwars")
file = EzDownload.open('https://s3.amazonaws.com/discode/seeds/david.png')
david.avatar.attach(io: file, filename: 'david.jpeg')
david.save!

michael = User.new(username: "Michael", email: "mschwartz@appacademy.io", password: "starwars")
file = EzDownload.open('https://s3.amazonaws.com/discode/seeds/michael.png')
michael.avatar.attach(io: file, filename: 'michael.png')
michael.save!

oliver = User.new(username: "Oliver", email: "oball@appacademy.io", password: "starwars")
file = EzDownload.open('https://s3.amazonaws.com/discode/seeds/oliver.jpeg')
oliver.avatar.attach(io: file, filename: 'oliver.jpeg')
oliver.save!

simcha = User.new(username: "Simcha", email: "scohen@appacademy.io", password: "starwars")
file = EzDownload.open('https://s3.amazonaws.com/discode/seeds/simcha.jpeg')
simcha.avatar.attach(io: file, filename: 'simcha.jpeg')
simcha.save!

soonmi = User.new(username: "Soon-Mi", email: "ssugihara@appacademy.io", password: "starwars")
file = EzDownload.open('https://s3.amazonaws.com/discode/seeds/soonmi.png')
soonmi.avatar.attach(io: file, filename: 'soonmi.png')
soonmi.save!

# Servers

app_academy = Server.new(server_name: "App Academy", admin: wumpus)
file = EzDownload.open('https://s3.amazonaws.com/discode/seeds/aa-logo.jpg')
app_academy.avatar.attach(io: file, filename: 'aa-logo.jpg')
app_academy.save!

# Channels

# # App Academy

channel = ChatChannel.create!(channel_name: "general")
app_academy.chat_channels << channel
app_academy.chat_channel_index << channel.id

channel = ChatChannel.create!(channel_name: "2018-11-26 NY Cohort")
app_academy.chat_channels << channel
app_academy.chat_channel_index << channel.id

channel = ChatChannel.create!(channel_name: "Michael's Circle")
app_academy.chat_channels << channel
app_academy.chat_channel_index << channel.id

channel = ChatChannel.create!(channel_name: "David's Circle")
app_academy.chat_channels << channel
app_academy.chat_channel_index << channel.id

channel = ChatChannel.create!(channel_name: "Oliver's Circle")
app_academy.chat_channels << channel
app_academy.chat_channel_index << channel.id

channel = ChatChannel.create!(channel_name: "Simcha's Circle")
app_academy.chat_channels << channel
app_academy.chat_channel_index << channel.id

channel = ChatChannel.create!(channel_name: "Soon-Mi's Circle")
app_academy.chat_channels << channel
app_academy.chat_channel_index << channel.id

app_academy.save!

# Server Memberships

# # App Academy

wumpus.servers << app_academy
wumpus.server_index << app_academy.id

andrew.servers << app_academy
andrew.server_index << app_academy.id

brian.servers << app_academy
brian.server_index << app_academy.id

david.servers << app_academy
david.server_index << app_academy.id

michael.servers << app_academy
michael.server_index << app_academy.id

oliver.servers << app_academy
oliver.server_index << app_academy.id

simcha.servers << app_academy
simcha.server_index << app_academy.id

soonmi.servers << app_academy
soonmi.server_index << app_academy.id

wumpus.save!
andrew.save!
brian.save!
david.save!
michael.save!
oliver.save!
simcha.save!
soonmi.save!

# Friend Request

FriendRequest.create!(user: andrew, friend: wumpus)
FriendRequest.create!(user: david, friend: wumpus)
FriendRequest.create!(user: wumpus, friend: oliver)
FriendRequest.create!(user: wumpus, friend: simcha)

wumpus.friends << michael
michael.friends << wumpus
wumpus.friends << brian
brian.friends << wumpus