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