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
    password: 'janesmith',
    password_confirmation: 'janesmith'
)

john_smith = User.create!(
    email: 'john.smith@happyplace.com',
    password: 'johnsmith',
    password_confirmation: 'johnsmith'
)

photo = jane_smith.skills.create!(
    title: 'Photographer',
    description: 'Technical artist who use a camera to capture various subjects.',
    rating: 5
)

estate = john_smith.skills.create!(
    title: 'Real Estate',
    description: 'Sales agent who rent, buy and sells homes to clients.',
    rating: 3
)

photo.reviews.create!(
    name:'Janey Johnson',
    title:'Best Photographer',
    date:'01-08-2018',
    description: 'Jane is the best Photographer I know. She rocks!',
    skill_rating: 5
    )
photo.reviews.create!(
    name:'Stacy Johnson',
    title:'Superb Photographer',
    date:'01-08-2017',
    description: 'Jane is so awesome. She paid attention to every little detail. She is so cool!',
    skill_rating: 5
    )
estate.reviews.create!(
    name:'James Williams',
    title:'Awesome Real Estate Agent',
    date:'01-08-2018',
    description: 'James is the best Real Estate Agent I know. He is perfect for the job!',
    skill_rating: 5
)

estate.reviews.create!(
    name:'Micheal Johnson',
    title:'Best Real Estate Agent',
    date:'01-08-2018',
    description: 'James is the sold me my first home. He is the great.',
    skill_rating: 4
)

puts "Done Seeding!"