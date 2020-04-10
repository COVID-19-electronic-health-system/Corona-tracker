import React, { Fragment } from "react"
import Typography from "@material-ui/core/Typography"

const Success = () => {
  return (
    <Fragment>
      <Typography variant="h4" align="center">
        Your Daily Health Tracker is now updated with today's ratings.
      </Typography>
      <Typography variant="h4" align="center" style={{ marginTop: 20 }}>
      🌱
      </Typography>
    </Fragment>
  )
}

export default Success