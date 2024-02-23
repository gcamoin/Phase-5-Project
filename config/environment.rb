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
