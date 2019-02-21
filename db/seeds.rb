# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

wumpus = User.new(username: "Wumpus", email: "demo@demo.com", password: "starwars")
file = EzDownload.open('https://s3.amazonaws.com/discode/seeds/wumpus.png')
wumpus.avatar.attach(io: file, filename: 'wumpus.png')
wumpus.save!

brain = User.new(username: "Brian", email: "bscott@appacademy.io", password: "starwars")
file = EzDownload.open('https://s3.amazonaws.com/discode/seeds/brain.jpeg')
brain.avatar.attach(io: file, filename: 'brain.jpeg')
brain.save!

david = User.new(username: "Wumpus", email: "ddickinson@appacademy.io", password: "starwars")
file = EzDownload.open('https://s3.amazonaws.com/discode/seeds/david.png')
david.avatar.attach(io: file, filename: 'david.jpeg')
david.save!

michael = User.new(username: "Wumpus", email: "mschwartz@appacademy.io", password: "starwars")
file = EzDownload.open('https://s3.amazonaws.com/discode/seeds/michael.jpeg')
michael.avatar.attach(io: file, filename: 'michael.jpeg')
michael.save!

oliver = User.new(username: "Wumpus", email: "oball@appacademy.io", password: "starwars")
file = EzDownload.open('https://s3.amazonaws.com/discode/seeds/oliver.jpeg')
oliver.avatar.attach(io: file, filename: 'oliver.jpeg')
oliver.save!

simcha = User.new(username: "Wumpus", email: "scohen@appacademy.io", password: "starwars")
file = EzDownload.open('https://s3.amazonaws.com/discode/seeds/simcha.jpeg')
simcha.avatar.attach(io: file, filename: 'simcha.jpeg')
simcha.save!

soonmi = User.new(username: "Wumpus", email: "ssugihara@appacademy.io", password: "starwars")
file = EzDownload.open('https://s3.amazonaws.com/discode/seeds/soonmi.jpeg')
soonmi.avatar.attach(io: file, filename: 'soonmi.jpeg')
soonmi.save!

andrew = User.new(username: "Wumpus", email: "alangston@appacademy.io", password: "starwars")
file = EzDownload.open('https://s3.amazonaws.com/discode/seeds/andrew.jpeg')
andrew.avatar.attach(io: file, filename: 'andrew.jpeg')
andrew.save!

