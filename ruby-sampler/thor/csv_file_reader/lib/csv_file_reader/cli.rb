require 'csv_file_reader'
require 'thor'
require 'csv'

module CsvFileReader
  class CLI < Thor
    desc "red WORD", "red words print." # コマンドの使用例と、概要
    def csv_read # コマンドはメソッドとして定義する
      table = CSV.table('data.csv')
      p table
    end
  end
end
