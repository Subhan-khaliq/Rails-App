# frozen_string_literal: true

class User < ApplicationRecord
  validates :name, presence: true
  validates :bio, presence: true
end
