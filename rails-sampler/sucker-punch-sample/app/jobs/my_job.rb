class MyJob < ActiveJob::Base
  queue_as :default

  def perform(message)
    sleep(1)
    Rails.logger.info(message)
    scp
  end

  private

  def scp
    opt = {
      keys: '/Users/fukuiretu/.ssh/aws.pem',
      compression: true
    }

    Net::SSH.start('ec2-xxx-xxx-xxx-xxx.ap-northeast-1.compute.amazonaws.com', 'ec2-user', opt) do |ssh|
      ssh.scp.upload! "/Users/fukui_retu/development/tmp/hoge.txt", "/home/ec2-user"
    end
  end
end
