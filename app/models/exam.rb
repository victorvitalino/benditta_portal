class Exam < ApplicationRecord
  belongs_to :exam_type, -> { where(status: true )}

end
