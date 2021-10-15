const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const viewerSchema = new Schema ({
  name: String,
  lastName : {type: String, default: ''},
  userName: String,
  genre: {type: String, enum: ['H', 'M', 'U'], default: 'U'},
  email: {type: String, unique: true, trim: true,},
  picture: {type : String, default: 'https://e7.pngegg.com/pngimages/549/560/png-clipart-computer-icons-login-scalable-graphics-email-accountability-blue-logo-thumbnail.png'},
  password: String,
},
{
  timestamps: true
})

const Viewer = mongoose.model('Viewer', viewerSchema)
module.exports = Viewer
