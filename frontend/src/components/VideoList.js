import React from 'react'

class VideoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
    }
    this.queryVideos = this.queryVideos.bind(this)
  }

  componentDidMount() {
    if (this.props.user) {
      this.queryVideos()
    }
  }

  async queryVideos() {
    const idToken = await this.props.user.getIdToken()
    const response = await fetch(
      `https://w4wy1yzxmg.execute-api.us-east-1.amazonaws.com/prod/videos`,
      {
        headers: { Authorization: idToken },
      }
    )
    if (response.status === 401) {
      return console.log('unauthorized')
    }
    const videos = await response.json()
    this.setState({ videos })
  }

  render() {
    const videoList = this.state.videos.map(
      ({ userId, videoPath, gifPath, status }, index) => {
        const userInitial = userId.charAt(0).toLowerCase()
        return (
          <tr key={index}>
            <td className="sm:px-6 px-2 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 sm:h-10 sm:w-10 h-8 w-8">
                  <img
                    className="sm:h-10 sm:w-10 rounded-full"
                    src={`https://cdn.auth0.com/avatars/${userInitial}.png`}
                    alt="profile-pic"
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
                <div className="ml-4">
                  <div className="sm:text-sm text-xs font-medium text-gray-900">
                    {userId}
                  </div>
                  <div className="sm:text-sm text-xs text-gray-500">
                    {status === 'PROCESSING' ? (
                      <span className="text-pink-800">{status}...</span>
                    ) : (
                      <span className="text-green-600">{status}</span>
                    )}
                  </div>
                </div>
              </div>
            </td>
            <td className="sm:px-6 text-center whitespace-nowrap text-indigo-600 font-semibold">
              <div className="sm:text-lg text-md text-gray-900">
                <video
                  className="m-auto"
                  width="270"
                  height="480"
                  loop
                  muted
                  autoPlay
                >
                  <source
                    src={`https://strika-data-points.s3.amazonaws.com/${videoPath}`}
                    type="video/mp4"
                  ></source>
                </video>
              </div>
            </td>
            <td className="sm:px-6 text-center whitespace-nowrap text-indigo-600 font-semibold">
              <div className="sm:text-lg text-md text-gray-900">
                {status === 'PROCESSING' ? (
                  <span className="text-gray-800">
                    The Video is being process in AWS.
                    <br /> Please wait some minutes.
                  </span>
                ) : (
                  <img
                    alt="Strika Body Detection Tracking"
                    className="m-auto"
                    src={`https://strika-data-points-output.s3.amazonaws.com/${gifPath}`}
                  />
                )}
              </div>
            </td>
          </tr>
        )
      }
    )

    return (
      <div className="flex flex-col justify-between">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 xl:rounded-lg">
              <div className="my-5 text-center">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                  Processed Data
                </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Workout Videos 🏋️‍♀️
                </p>
                <p className="mt-5 max-w-2xl text-xl text-gray-500 sm:mx-auto"></p>
              </div>
              <table className="min-w-full divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Users
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Recorded Video
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Output Data
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {videoList}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default VideoList
