class ExamType < ApplicationRecord
  scope :active, -> { where(status: true )}
end
