class SavepointSerializer < ActiveModel::Serializer
  attributes :id, :savepoint
  has_one :character
end
