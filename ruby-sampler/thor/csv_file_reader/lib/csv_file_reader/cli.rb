require 'csv_file_reader'
require 'thor'
require 'csv'

module CsvFileReader
  class CLI < Thor
    desc "red WORD", "red words print." # コマンドの使用例と、概要
    option :csv, :type => :string, :aliases => '-c', :desc => "csv file", :required => true
    def exec # コマンドはメソッドとして定義する
      table = CSV.table(options[:csv])
      p table
    end
  end
end
