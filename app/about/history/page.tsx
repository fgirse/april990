import Script from 'next/script'
import React from 'react'
import Image from 'next/image';
import $ from 'jquery';
import '../../../components/History/css/styles.css';
const page = () => {																																															
  return (
	<>
	  <div />
	  <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
	  {/* Then load prettyPhoto */}
	  <Script src="/components/History/js/prettyPhoto/js/jquery.prettyPhoto.js" strategy="afterInteractive" />
	  	<Script type="text/javascript" src="js/jquery/jquery-1.7.1.min.js"></Script>
		<Script type="text/javascript" src="js/jquery/jquery-ui-1.8.18.custom.min.js"></Script>
				<Script type="text/javascript" src="js/jquery.timeline.js"></Script>
	  {/* Your timeline markup here */}
	  <div id="timeline_container">
        <div id="timeline">
        	{/* TIMELINE CONTAINER */}
			<div id="timeline_container">
				
				{/* TIMELINE */}
				<div id="timeline" 
					data-fadeInDelay="3000"
					data-width="952"
					data-height="450"
					data-imagesWidth="3400"
					data-imagesHeight="265"
					data-contentWidth="1670"
					data-contentHeight="174"
					data-draggerWidth="59"
					data-draggerHeight="21"
					data-mouseWheel="1"
				>

						
						{/* VIEWPORT - IMAGES */}
						<div className="viewport">
							<div className="images">
								<Image src="/Images/content_img_1.png"  width={952} height={450} alt="" />
								<Image src="/Images/content_img_2.png" width={952} height={450} alt="" />
								<Image src="/Images/content_img_3.png" width={952} height={450} alt="" />
								<Image src="/Images/content_img_4.png" width={952} height={450} alt="" />
								<Image src="/Images/content_img_5.png" width={952} height={450} alt="" />
								<Image src="/Images/content_img_6.jpg" width={952} height={450} alt="" />
							</div>
						</div>
						
						
						{/* SCROLLBAR (EDIT CSS FOR STYLING) */}
						<div className="scrollbar">
							<div className="track">
							
								{/*  MILESTONES MARKS */}
								<div className="marks">
									<div id="m0" className="mark" data-xpos="360" data-label="MARCH 1992"></div>
									<div id="m1" className="mark" data-xpos="520" data-label="2005"></div>
									<div id="m2" className="mark" data-xpos="700" data-label="2006 - PARTNERS"></div>
									<div id="m3" className="mark" data-xpos="810" data-label="2010"></div>
								</div>
								
								<div className="dragger"></div>
							</div>
						</div>
						
						
						{/* MILESTONES */}
						<div className="milestones">
						
							<div className="content">
							
								
								{/* MILESTONE SAMPLE 1 (FIRST) */}
								<div className="column_first">
									<div className="c200">
										<span className="date">NOVEMBER 1978 - STARTUP</span>
										<span className="txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit, <strong>sed do eiusmod tempor incididunt</strong> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.<br/><br/>Ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </span>
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 2 */}
								<div className="column">
									<div className="c125">
										<span className="date">1985</span>
										<span className="txt">Ut enim ad minim veniam, quis nostrud exercitation ullamco.<br/><br/>Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </span>
										<span className="thumb"><a href="#extended_text1" data-rel="prettyPhoto" title=""><Image src="/images/read_more.png" alt="" width={50} height={50} className="readmore" title="READ MORE" /></a></span>

										<div id="extended_text1" className="hidden">	{/* SAMPLE OF HIDDEN DIV WITH EXTENDED CONTENT */}
											<p><strong>Sample of extended content opened with lightbox</strong><br/><br/>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip <a href="http://www.themeforest.net" target="_blank">sample of external link</a>. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										</div>
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 3 */}
								<div className="column">
									<div className="c125">
										<span className="date">MARCH 1992</span>
										<span className="txt">Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
										<span className="date"><br/>NOVEMBER 1999</span>
										<span className="txt">Duis aute irure dolor in voluptate velit esse.</span>
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 4 */}
								<div className="column">
									<div className="c125">
										<span className="date">2002 - 20 YEARS<br/>ANNIVERSARY VIDEO</span>
										<span className="thumb"><a href="http://vimeo.com/24492485" data-rel="prettyPhoto" title="20 Years Anniversary Video" className="video_rollover"><Image src="/images/video_sample_thumb.png" width={120} height={90} alt="" /></a></span>
										<span className="thumb_description">Short video description</span>
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 5 */}
								<div className="column">
									<div className="c150">
										<span className="date">2005</span>
										<span className="txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
										<span className="big_link"><a href="/images/gallery_sample_02.jpg" data-rel="prettyPhoto[sample_gallery]" title="Gallery sample 01"> IMAGE GALLERY</a></span>
										
										<div className="hidden">	{/* SAMPLE OF HIDDEN GALLERY ITEMS */}
											<a href="/images/gallery_sample_01.jpg" data-rel="prettyPhoto[sample_gallery]" title="Gallery sample 02"></a>
											<a href="/images/gallery_sample_03.jpg" data-rel="prettyPhoto[sample_gallery]" title="Gallery sample 03"></a>
										</div>
										
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 6 */}
								<div className="column">
									<div className="c125">
										<span className="date">2006 - WPA PARTNERS</span>
										<span className="txt">Sample of external links:</span>
										<span className="link"><br/><a href="http://themeforest.net/user/pezflash" target="_blank">www.envato.com</a></span>
										<span className="link"><a href="http://themeforest.net/user/pezflash" target="_blank">www.themeforest.net</a></span>
										<span className="link"><a href="http://themeforest.net/user/pezflash" target="_blank">www.codecanyon.net</a></span>
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 7 */}
								<div className="column">
									<div className="c225">
										<span className="date">2010 - WIDE COLUMN SAMPLE</span>
										<span><Image src="/images/logos.png" width={100} height={100} alt="" /></span>
										<span className="txt">Ut enim ad minim veniam, quis nostrud exercit ullamco. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </span>	
										<span className="thumb"><a href="#extended_text2" data-rel="prettyPhoto" title=""><Image src="/images/read_more.png" width={50} height={50} alt="" className="readmore" title="READ MORE" /></a></span>
										
										<div id="extended_text2" className="hidden">	{/* SAMPLE OF HIDDEN DIV WITH EXTENDED CONTENT */}
											<p><strong>Sample of extended content opened with lightbox</strong><br/><br/>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip <a href="http://www.themeforest.net" target="_blank">sample of external link</a>. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										</div>
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 8 */}
								<div className="column">
									<div className="c125">
										<span className="date">2012 - PRESENT</span>
										<span className="thumb"><a href="/images/gallery_sample_01.jpg" data-rel="prettyPhoto[sample_gallery2]" title="10 Years Anniversary Video" className="image_rollover"><Image src="/images/image_sample_thumb.png" width={100} height={100} alt="" /></a></span>
										<span className="thumb_description">Image description</span>
										
										<div className="hidden">	{/* SAMPLE OF HIDDEN GALLERY ITEMS */}
											<a href="/images/gallery_sample_02.jpg" data-rel="prettyPhoto[sample_gallery2]" title="Gallery sample 02"></a>
											<a href="/images/gallery_sample_03.jpg" data-rel="prettyPhoto[sample_gallery2]" title="Gallery sample 03"></a>
										</div>
									</div>
								</div>
								
							</div> {/* end content */}
							
						</div> {/* end milestones */}
						
						
						{/* AUDIO PLAYER */}
						<div className="audio_player">
							<audio src="/mp3/music.mp3" preload="auto"></audio>
						</div>
										
				
				</div> {/* end timeline */}
        </div>
      </div>
      {/* Optionally, include your timeline CSS */}
      <link rel="stylesheet" href="/components/History/css/styles.css" />
      <link rel="stylesheet" href="/components/History/js/prettyPhoto/css/prettyPhoto.css" />
	</div>
	</>
  )
}

export default page

