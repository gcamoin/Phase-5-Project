# Preview all emails at http://localhost:3000/rails/mailers/sign_up_mailer
class SignUpMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/sign_up_mailer/signup_created
  def signup_created
    SignUpMailer.signup_created
  end

end
