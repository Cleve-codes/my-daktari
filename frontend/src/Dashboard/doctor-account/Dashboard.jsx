// import React from 'react'

import Loader from '../../components/Loader/Loader'
import Error from '../../components/Error/Error'
import useGetProfile from "../../Hooks/useFetchData"
import { BASE_URL} from "../../../config"
import Tabs from './Tabs'
import { useState } from 'react'

const Dashboard = () => {

  const {data, loading, error} = useGetProfile(`${BASE_URL}/doctor/profile/me`)

  const [tab, setTab] = useState('overview')

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto" >
        {loading && !error && <Loader />}
        {error && !loading && <Error error={error} />}

        {
          !loading && !error &&  (
            <div className='grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]'>
                <Tabs tab={tab} setTab={setTab} />
            </div>
          )
        }

      </div>
    </section>
  )
}

export default Dashboard