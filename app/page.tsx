import Image from 'next/image'

export default function Home() {
  return (

      <main className={'bg-gray-100 min-h-screen w-screen'}>
        <section className={'bg-white max-w-screen-2xl m-auto '}>
          {/*Nav Bar*/}
          <nav className={'bg-white p-2 flex justify-between'}>
            <a href={'#'} className={'font-bold text-gray-700 text-2xl'}>Open Table</a>
            <div>
              <div className={'flex'}>
                <button className={'bg-blue-400 text-white border p-1 px-4 rounded mr-3'}>Sign In</button>
                <button className={' border p-1 px-4 rounded'}>Sign Out</button>
              </div>
            </div>
          </nav>
          {/*Nav Bar*/}
        </section>
          {/*Header*/}
        <section className={'h-96 overflow-hidden'}>
          <div className={'bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center'}>
            <h1 className={'text-7xl text-white capitalize text-shadow text-center'}>Milestone Grills</h1>

          </div>
        </section>
          {/*Header*/}
          {/*Descriptions*/}
        <section className={'flex m-auto w-2/3 justify-center items-start 0 -mt-10 '}>
          <div className={'bg-white w-[70%] rounded p-3 shadow'}>
              {/*Reasturant Nav Bar*/}
              <nav className={'flex text-reg border-b pb-2'}>
                <a href={'#'} className={'mr-7'}>Overviews</a>
                <a href={'#'} className={'mr-7'}>Menus</a>

              </nav>

              {/*Reasturant Nav Bar*/}

              {/*Title*/}
              <div className={'mt-4 border-b pb-6'}>
                  <h1 className={'font-bold text-6xl'}>Milestone Grill</h1>
              </div>
              {/*Title*/}
              {/*Ratings*/}
              <div className={'flex items-end'}>
                  <div className={'ratings mt-2 flex items-center'}>
                      <p>*****</p>
                      <p className={"text-reg ml-3"}>4.8</p>
                  </div>
                  <div>
                      <p className={'text-reg ml-4'}>600</p>
                  </div>

              </div>
              {/*Ratings*/}
              {/*Descriptions*/}
              <div className={'mt-4'}>
                  <p className={'text-lg font-light'}>
                      The classics ypu love prepared with a perfect twist,
                      all served up in an atmosphere that feels right.
                      Thats the Milestones promise.So, whether your celebrating a milestone,
                      making the most of Happy Hour or enjoy brunch with friends ,
                      you can be sure that every Milestones experience is a simple and perfectly memorable one.
                  </p>
              </div>
              {/*Descriptions*/}
              {/*Images*/}
              <div>
                  <h1 className={'font-bold text-3xl mt-10 mb-7 border-b-5'}>5 image</h1>
                  <div className={'flex flex-wrap'}>
                      <img className={'w-55 h-44 mr-1 mb-1'}
                           src={'https://resizer.otstatic.com/v2/photos/xlarge/3/41701449.jpeg'}/>
                      <img className={'w-55 h-44 mr-1 mb-1'}
                           src={'https://resizer.otstatic.com/v2/photos/xlarge/3/41701449.jpeg'}/>
                      <img className={'w-55 h-44 mr-1 mb-1'}
                           src={'https://resizer.otstatic.com/v2/photos/xlarge/3/41701449.jpeg'}/>
                      <img className={'w-55 h-44 mr-1 mb-1'}
                           src={'https://resizer.otstatic.com/v2/photos/xlarge/3/41701449.jpeg'}/>
                      <img className={'w-55 h-44 mr-1 mb-1'}
                           src={'https://resizer.otstatic.com/v2/photos/xlarge/3/41701449.jpeg'}/>

                  </div>
              </div>
              {/*Images*/}

              {/*Reviews*/}
              <div>
                  <h1 className={'font-bold text-3xl mt-10 mb-7 border-b pb-5 '}>What 100 people are saying</h1>
                  {/*Reviews Card*/}
                  <div className="border-b pb-7 mb-7">
                      <div className="flex">
                          <div className="w-1/6 flex flex-col items-center">
                              <div className="rounded-full bg-blue-400 w-15 h-15 items-center justify-center">
                                  <h2 className={'text-white text-2xl text-center'}>MJ</h2>
                              </div>
                              <p className={'font-bold text-center'}>Michale Jordan</p>
                          </div>
                          <div className={'ml-10 w-5/6'}>
                              <div className={'flex items-center'}>
                                  <div className="flex mr-5">
                                      *****
                                  </div>
                              </div>
                              <div className={'mt-5'}>
                                  <p className={"text-lg font-light"}>i had a good time</p>
                              </div>

                          </div>
                      </div>
                  </div>
                  {/*Reviews Card*/}
              </div>
              {/*Reviews*/}

          </div>

        </section>
          {/*Descriptions*/}

      </main>
  )
}
