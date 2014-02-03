require 'sinatra'

get '/' do
  @images = [
    'http://farm3.staticflickr.com/2793/4460874164_1ed2dee9f3_',
    'http://farm5.staticflickr.com/4143/4866515509_34116cdbe1_',
    'http://farm5.staticflickr.com/4021/4460874096_c8589beb51_',
    'http://farm5.staticflickr.com/4043/4460094025_0e34c02330_',
    'http://farm5.staticflickr.com/4024/4460874212_0277e441bd_'
  ]
  erb :index
end

def small(partial)
  partial + 'q.jpg'
end

def big(partial)
  partial + 'b.jpg'
end
