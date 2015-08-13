class Price

  attr_reader :price

  def initialize(price)
    @price = BigDecimal.new(price.to_s)
    if @price.round(2) != @price
      raise "#{price} is not a price"
    end
  end

  def /(other)
    quotient = @price / other
    Price.new(quotient.round(2,:banker))
  end

  def to_s
    @price.to_s("F")
  end

  def ==(other)
    @price == other.price
  end

  def +(other)
    Price.new(@price + other.price)
  end
end
