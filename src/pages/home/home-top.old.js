<HomeTop columns={24} className="home-top">
          <HomeTop.Col lg={3} xl={3} md={3} sm={3} xs={0} className="col-left">
            <div className="leftImageContainer">
              {sideImages.left.map(({ id, url }) => (
                <Image
                  key={id}
                  className="img"
                  radius={24}
                  id={id}
                  width={252}
                  height={400}
                  src={url}
                />
              ))}
            </div>
          </HomeTop.Col>

          <HomeTop.Col
            lg={18}
            xl={18}
            md={18}
            sm={18}
            xs={24}
            className="col-center"
            style={{ overflow: 'hidden' }}
          >

            <div className="colCenterHeader" >
              <div id="head-logo">
                <Logo fill="#3800B0" />
                <Button variant="white">
                  <Link className="how-it-works" to="/faq">How it works</Link>
                </Button>
              </div>
              <div id="head-center">
                <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                  <Box
                    sx={() => ({
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    })}
                  >
                    <GridIcon />
                    <p>All wishes</p>
                  </Box>
                </MediaQuery>

              </div>
              <div id="head-end">
                <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                  <Menu className="head-menu">
                    <Menu.Item>
                      {showes ? <Autholog setShow={setShow} setShowes={setShowes} /> : (show ? "" : <div style={{
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <Button variant="white" className="log-buttons">
                          <ButtonDefault onClick={
                            () => {
                              let body = document.querySelector('body');
                              body.setAttribute('style', 'overflow-x: hidden');
                              setShowes(!show)
                            }
                          }

                            style={{
                              border: '0',
                              background: '#EBE5F7',
                              color: "#3800B0",
                              fontSize: '14px',
                              fontWeight: '600',

                            }}
                          >Log In</ButtonDefault>
                        </Button>

                      </div>)}

                    </Menu.Item>
                    <Menu.Item>

                      {show ? <Autho setShow={setShow} /> : (showes ? "" : <div style={{
                        display: 'flex',
                        alignItems: 'center'
                      }}>

                        <Button variant="white" className="log-buttons" >
                          <ButtonDefault
                            onClick={() => {
                              let body = document.querySelector('body');
                              body.setAttribute('style', 'overflow-x: hidden');
                              setShow(!show)
                            }}

                            style={{
                              border: '0',
                              background: '#EBE5F7',
                              color: "#3800B0",
                              fontSize: '14px',
                              fontWeight: '600',

                            }}
                          >
                            Sign Up
                          </ButtonDefault>
                        </Button>
                      </div>)}
                    </Menu.Item>
                  </Menu>
                </MediaQuery>

                {showes ? <Autholog setShow={setShow} setShowes={setShowes} /> : (show ? "" : <div style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <Button variant="white" className="log-buttons">
                    <ButtonDefault onClick={
                      () => {
                        let body = document.querySelector('body');
                        body.setAttribute('style', 'overflow-x: hidden');
                        setShowes(!show)
                      }
                    }

                      style={{
                        border: '0',
                        background: '#EBE5F7',
                        color: "#3800B0",
                        fontSize: '14px',
                        fontWeight: '600',

                      }}
                    >Log In</ButtonDefault>
                  </Button>

                </div>)}

                {show ? <Autho setShow={setShow} /> : (showes ? "" : <div style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>

                  <Button variant="white" className="log-buttons" >
                    <ButtonDefault
                      onClick={() => {
                        let body = document.querySelector('body');
                        body.setAttribute('style', 'overflow-x: hidden');
                        setShow(!show)
                      }}

                      style={{
                        border: '0',
                        background: '#EBE5F7',
                        color: "#3800B0",
                        fontSize: '14px',
                        fontWeight: '600',

                      }}
                    >
                      Sign Up
                    </ButtonDefault>
                  </Button>
                </div>)}
              </div>
            </div>

            <div className="colCenterCenter">
              <div id="head">
                <p size="xl">Give yourself</p>
                <FireworkIcon id="fireworkIcon" />
                <p>emotions</p>
              </div>
              {/* ---- */}
              <div className="colCenterBottom">
                <div>
                  <p>I wish</p>
                  <WishCreationInput
                    placeholder="Describe your wish"
                    onChange={(e) => setWishName(e.target.value)}
                  />
                  <p>On my birthday</p>
                </div>
                <WishCreationButton onClick={GetWishNameForCreation}>Create a wish</WishCreationButton>
              </div>
              {/* ---- */}
            </div>

            <div id="last-e">
              <Button variant="outlined" size="s">
                <ArrowDownIcon width={20} height={20} />
              </Button>
              <Button variant="outlined" size="s">
                Recent
              </Button>
              <Button variant="outlined" size="s">
                Popular
              </Button>
              <Button variant="outlined" size="s">
                Info
              </Button>
              <Button variant="outlined" size="s">
                Faq
              </Button>
            </div>
          </HomeTop.Col>

          <HomeTop.Col lg={3} xl={3} md={3} sm={3} xs={0} className="col-right">
            <div className="rightImageContainer">
              {sideImages.right.map(({ id, url }) => (
                <Image
                  key={id}
                  className="img"
                  radius={24}
                  id={id}
                  width={252}
                  height={400}
                  src={url}
                />
              ))}
            </div>
          </HomeTop.Col>
        </HomeTop>