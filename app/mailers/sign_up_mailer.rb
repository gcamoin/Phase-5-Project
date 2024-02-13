class SignUpMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.sign_up_mailer.signup_created.subject
  #
  def signup_created
    @greeting = "Hi"

    mail to: User.last.email, subject: "New User Signup"
  end
end
