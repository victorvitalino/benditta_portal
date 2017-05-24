# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170509192609) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admin_users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "avatar"
    t.string   "email"
    t.string   "password_digest"
    t.integer  "privilege",                 default: 0
    t.text     "bio"
    t.datetime "last_signin_at"
    t.string   "remember_token"
    t.datetime "remember_token_expires_at"
    t.boolean  "status",                    default: true
    t.datetime "created_at",                               null: false
    t.datetime "updated_at",                               null: false
  end

  create_table "dolls", force: :cascade do |t|
    t.string   "name"
    t.integer  "category"
    t.boolean  "status"
    t.string   "sku"
    t.string   "photo"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "posts", force: :cascade do |t|
    t.string   "title"
    t.text     "content"
    t.boolean  "publish"
    t.string   "thumb"
    t.string   "thumbnail"
    t.string   "photo"
    t.boolean  "featured"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
