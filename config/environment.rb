# Load the Rails application.
require_relative "application"

# Initialize the Rails application.
Rails.application.initialize!


ActionMailer::Base.smtp_settings = {
    :user_name => 'apikey', 
    :password => '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', 
    :domain => 'http://localhost:4000',
    :address => 'smtp.sendgrid.net',
    :port => 587,
    :authentication => :plain,
    :enable_starttls_auto => true
  }

