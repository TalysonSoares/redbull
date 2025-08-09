json.extract! product, :id, :product_type, :storage, :expire_date, :created_at, :updated_at
json.url product_url(product, format: :json)
