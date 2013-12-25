require_relative "../story_helper.rb"

describe "EventStory" do
  describe "GET /events" do
    before { get "/events?limit=25&page=1&start=0&startDate=2013-12-01" }
    let(:json) { eval last_response.body }
    # let(:events) { json[:events] }

    it "responds successfully" do
      last_response.status.must_equal 200
      json[:status].must_equal "success"
    end

    it "returns 3 events" do
      skip
      events.size.must_equal 3
    end
  end

  # describe "POST /users" do
  #   before do
  #     post_json("/api/v1/users", {
  #       user: {
  #         name: "bob",
  #         email: "bob@test.com"
  #       }
  #     })
  #   end

  #   let(:resp) { json_parse(last_response.body) }

  #   it { resp[:status].must_equal "success" }
  #   it { resp[:user][:name].must_equal "bob" }
  #   it { resp[:user][:email].must_equal "bob@test.com" }
  # end

end
