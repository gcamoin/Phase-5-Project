class SignUpMailer < ApplicationMailer
  default :from => 'gcamoin5@gmail.com'
  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.sign_up_mailer.signup_created.subject
  #
  def signup_created
    mail( :to => User.last.email,
    :subject => 'Thanks for signing up for our amazing app' )
  end
end

