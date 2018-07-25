# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

jane_smith = User.create!(
    email: 'jane.smith@happyplace.com',
    password: 'janes',
    password_confirmation: 'janes'
)

john_smith = User.create!(
    email: 'john.smith@happyplace.com',
    password: 'johns',
    password_confirmation: 'johns'
)

jane_smith.skills.create!(
    title: 'Photographer',
    description: 'Technical artist who use a camera to capture various subjects.',
    rating: 5
)

john_smith.skills.create!(
    title: 'Real Estate',
    description: 'Technical artist who use a camera to capture various subjects.',
    rating: 3
)
