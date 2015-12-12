var React = require('react');
var HeaderApp = React.createClass({
	render: function(){
		return (
				<header id="header">
					<div id="logo-group">
						<span id="logo"> <img src="/assets/img/logo.png" alt="SmartAdmin" /> </span>
						<span id="activity" className="activity-dropdown"> <i className="fa fa-user"></i> <b className="badge bg-color-red bounceIn animated"> 21 </b> </span>

						<div className="ajax-dropdown">

							<div className="btn-group btn-group-justified" data-toggle="buttons">
								<label className="btn btn-default">
									<input type="radio" name="activity" id="ajax/notify/mail.html" />
									Msgs (14) </label>
								<label className="btn btn-default">
									<input type="radio" name="activity" id="ajax/notify/notifications.html" />
									notify (3) </label>
								<label className="btn btn-default">
									<input type="radio" name="activity" id="ajax/notify/tasks.html" />
									Tasks (4) </label>
							</div>

							<div className="ajax-notifications custom-scroll">

								<div className="alert alert-transparent">
									<h4>Click a button to show messages here</h4>
									This blank page message helps protect your privacy, or you can show the first message here automatically.
								</div>

								<i className="fa fa-lock fa-4x fa-border"></i>

							</div>
							

							<span> Last updated on: 12/12/2013 9:43AM
								<button type="button" data-loading-text="&lt;i className=&#39;fa fa-refresh fa-spin&#39;&gt;&lt;/i&gt; Loading..." className="btn btn-xs btn-default pull-right">
									<i className="fa fa-refresh"></i>
								</button> </span>

						</div>
					</div>

					<div className="project-context hidden-xs">

						<span className="label">Projects:</span>
						<span className="project-selector dropdown-toggle" data-toggle="dropdown">Recent projects <i className="fa fa-angle-down"></i></span>

						<ul className="dropdown-menu">
							<li>
								<a href="javascript:void(0);">Online e-merchant management system - attaching integration with the iOS</a>
							</li>
							<li>
								<a href="javascript:void(0);">Notes on pipeline upgradee</a>
							</li>
							<li>
								<a href="javascript:void(0);">Assesment Report for merchant account</a>
							</li>
							<li className="divider"></li>
							<li>
								<a href="javascript:void(0);"><i className="fa fa-power-off"></i> Clear</a>
							</li>
						</ul>

					</div>
					
					<div className="pull-right">
						
						<div id="hide-menu" className="btn-header pull-right">
							<span> <a href="javascript:void(0);" data-action="toggleMenu" title="Collapse Menu"><i className="fa fa-reorder"></i></a> </span>
						</div>
						
						<ul id="mobile-profile-img" className="header-dropdown-list hidden-xs padding-5">
							<li className="">
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/#" className="dropdown-toggle no-margin userdropdown" data-toggle="dropdown"> 
									<img src="/assets/img/p_50x50.jpg" alt="John Doe" className="online" />  
								</a>
								<ul className="dropdown-menu pull-right">
									<li>
										<a href="javascript:void(0);" className="padding-10 padding-top-0 padding-bottom-0"><i className="fa fa-cog"></i> Setting</a>
									</li>
									<li className="divider"></li>
									<li>
										<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/#ajax/profile.html" className="padding-10 padding-top-0 padding-bottom-0"> <i className="fa fa-user"></i> <u>P</u>rofile</a>
									</li>
									<li className="divider"></li>
									<li>
										<a href="javascript:void(0);" className="padding-10 padding-top-0 padding-bottom-0" data-action="toggleShortcut"><i className="fa fa-arrow-down"></i> <u>S</u>hortcut</a>
									</li>
									<li className="divider"></li>
									<li>
										<a href="javascript:void(0);" className="padding-10 padding-top-0 padding-bottom-0" data-action="launchFullscreen"><i className="fa fa-arrows-alt"></i> Full <u>S</u>creen</a>
									</li>
									<li className="divider"></li>
									<li>
										<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/login.html" className="padding-10 padding-top-5 padding-bottom-5" data-action="userLogout"><i className="fa fa-sign-out fa-lg"></i> <strong><u>L</u>ogout</strong></a>
									</li>
								</ul>
							</li>
						</ul>

						<div id="logout" className="btn-header transparent pull-right">
							<span> <a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/login.html" title="Sign Out" data-action="userLogout" data-logout-msg="You can improve your security further after logging out by closing this opened browser"><i className="fa fa-sign-out"></i></a> </span>
						</div>

						<div id="search-mobile" className="btn-header transparent pull-right">
							<span> <a href="javascript:void(0)" title="Search"><i className="fa fa-search"></i></a> </span>
						</div>
						
						<form action="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/#ajax/search.html" className="header-search pull-right">
							<input id="search-fld" type="text" name="param" placeholder="Find reports and more" />
							<button type="submit">
								<i className="fa fa-search"></i>
							</button>
							<a href="javascript:void(0);" id="cancel-search-js" title="Cancel Search"><i className="fa fa-times"></i></a>
						</form>

						<div id="fullscreen" className="btn-header transparent pull-right">
							<span> <a href="javascript:void(0);" data-action="launchFullscreen" title="Full Screen"><i className="fa fa-arrows-alt"></i></a> </span>
						</div>

						<div id="speech-btn" className="btn-header transparent pull-right hidden-sm hidden-xs">
							<div> 
								<a href="javascript:void(0)" title="Voice Command" data-action="voiceCommand"><i className="fa fa-microphone"></i></a> 
								<div className="popover bottom"><div className="arrow"></div>
									<div className="popover-content">
										<h4 className="vc-title">Voice command activated <br/><small>Please speak clearly into the mic</small></h4>
										<h4 className="vc-title-error text-center">
											<i className="fa fa-microphone-slash"></i> Voice command failed
											<br/><small className="txt-color-red">Must <strong>"Allow"</strong> Microphone</small>
											<br/><small className="txt-color-red">Must have <strong>Internet Connection</strong></small>
										</h4>
										<a href="javascript:void(0);" className="btn btn-success" onclick="commands.help()">See Commands</a> 
										<a href="javascript:void(0);" className="btn bg-color-purple txt-color-white" onclick="$(&#39;#speech-btn .popover&#39;).fadeOut(50);">Close Popup</a> 
									</div>
								</div>
							</div>
						</div>

						<ul className="header-dropdown-list hidden-xs">
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/#" className="dropdown-toggle" data-toggle="dropdown"> <img src="/assets/img/blank.gif" className="flag flag-us" alt="United States" /> <span> US</span> <i className="fa fa-angle-down"></i> </a>
								<ul className="dropdown-menu pull-right">
									<li className="active">
										<a href="javascript:void(0);"><img src="/assets/img/blank.gif" className="flag flag-us" alt="United States" /> English (US)</a>
									</li>
									<li>
										<a href="javascript:void(0);"><img src="/assets/img/blank.gif" className="flag flag-fr" alt="France" /> Français</a>
									</li>
									<li>
										<a href="javascript:void(0);"><img src="/assets/img/blank.gif" className="flag flag-es" alt="Spanish" /> Español</a>
									</li>
									<li>
										<a href="javascript:void(0);"><img src="/assets/img/blank.gif" className="flag flag-de" alt="German" /> Deutsch</a>
									</li>
									<li>
										<a href="javascript:void(0);"><img src="/assets/img/blank.gif" className="flag flag-jp" alt="Japan" /> 日本語</a>
									</li>
									<li>
										<a href="javascript:void(0);"><img src="/assets/img/blank.gif" className="flag flag-cn" alt="China" /> 中文</a>
									</li>	
									<li>
										<a href="javascript:void(0);"><img src="/assets/img/blank.gif" className="flag flag-it" alt="Italy" /> Italiano</a>
									</li>	
									<li>
										<a href="javascript:void(0);"><img src="/assets/img/blank.gif" className="flag flag-pt" alt="Portugal" /> Portugal</a>
									</li>
									<li>
										<a href="javascript:void(0);"><img src="/assets/img/blank.gif" className="flag flag-ru" alt="Russia" /> Русский язык</a>
									</li>
									<li>
										<a href="javascript:void(0);"><img src="/assets/img/blank.gif" className="flag flag-kr" alt="Korea" /> 한국어</a>
									</li>						
									
								</ul>
							</li>
						</ul>

					</div>

				</header>
			);
	}
});
module.exports = HeaderApp;