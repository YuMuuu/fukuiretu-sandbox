class MyJob < ActiveJob::Base
  queue_as :default

  def perform(message)
    sleep(5)
    Rails.logger.info(message)
  end
end
