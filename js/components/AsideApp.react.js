var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var AsideApp = React.createClass({
	render: function(){
		return (
				<aside id="left-panel">
			<div className="login-info">
				<span>
					
					<a href="javascript:void(0);" id="show-shortcut" data-action="toggleShortcut">
						<img src="/assets/img/p_50x50.jpg" alt="me" className="online" /> 
						<span>
							Phuong.Nguyen
						</span>
						<i className="fa fa-angle-down"></i>
					</a>		
				</span>
			</div>
			<nav>

				<ul >
					<li className="">
						<Link to={'/dashboard'}><i className="fa fa-lg fa-fw fa-home"></i> <span className="menu-item-parent">Dashboard</span></Link>
					</li>
					<li>
						<Link to={'/inbox'}><i className="fa fa-lg fa-fw fa-inbox"></i> <span className="menu-item-parent">Inbox</span><span className="badge pull-right inbox-badge">14</span></Link>
					</li>
					<li>
						<a href="#"><i className="fa fa-lg fa-fw fa-bar-chart-o"></i> <span className="menu-item-parent">Graphs</span><b className="collapse-sign"><em className="fa fa-plus-square-o"></em></b></a>
						<ul>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/flot.html">Flot Chart</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/morris.html">Morris Charts</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/inline-charts.html">Inline Charts</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/dygraphs.html">Dygraphs</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/chartjs.html">Chart.js <span className="badge pull-right inbox-badge bg-color-yellow">new</span></a>
							</li>
						</ul>
					</li>
					<li className="active open">
						<a href="#"><i className="fa fa-lg fa-fw fa-table"></i> <span className="menu-item-parent">Tables</span><b className="collapse-sign"><em className="fa fa-minus-square-o"></em></b></a>
						<ul style={{display: 'block'}}>
							<li className="active">
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/table.html">Normal Tables</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/datatables.html">Data Tables <span className="badge inbox-badge bg-color-greenLight">v1.10.6</span></a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/jqgrid.html">Jquery Grid</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#"><i className="fa fa-lg fa-fw fa-pencil-square-o"></i> <span className="menu-item-parent">Forms</span><b className="collapse-sign"><em className="fa fa-plus-square-o"></em></b></a>
						<ul>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/form-elements.html">Smart Form Elements</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/form-templates.html">Smart Form Layouts</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/validation.html">Smart Form Validation</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/bootstrap-forms.html">Bootstrap Form Elements</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/bootstrap-validator.html">Bootstrap Form Validation</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/plugins.html">Form Plugins</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/wizard.html">Wizards</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/other-editors.html">Bootstrap Editors</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/dropzone.html">Dropzone</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/image-editor.html">Image Cropping <span className="badge pull-right inbox-badge bg-color-yellow">new</span></a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#"><i className="fa fa-lg fa-fw fa-desktop"></i> <span className="menu-item-parent">UI Elements</span><b className="collapse-sign"><em className="fa fa-plus-square-o"></em></b></a>
						<ul>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/general-elements.html">General Elements</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/buttons.html">Buttons</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/#">Icons<b className="collapse-sign"><em className="fa fa-plus-square-o"></em></b></a>
								<ul>
									<li>
										<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/fa.html"><i className="fa fa-plane"></i> Font Awesome</a>
									</li>
									<li>
										<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/glyph.html"><i className="glyphicon glyphicon-plane"></i> Glyph Icons</a>
									</li>
									<li>
										<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/flags.html"><i className="fa fa-flag"></i> Flags</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/grid.html">Grid</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/treeview.html">Tree View</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/nestable-list.html">Nestable Lists</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/jqui.html">JQuery UI</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/typography.html">Typography</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/#">Six Level Menu<b className="collapse-sign"><em className="fa fa-plus-square-o"></em></b></a>
								<ul>
									<li>
										<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/#"><i className="fa fa-fw fa-folder-open"></i> Item #2<b className="collapse-sign"><em className="fa fa-plus-square-o"></em></b></a>
										<ul>
											<li>
												<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/#"><i className="fa fa-fw fa-folder-open"></i> Sub #2.1 <b className="collapse-sign"><em className="fa fa-plus-square-o"></em></b></a>
												<ul>
													<li>
														<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/#"><i className="fa fa-fw fa-file-text"></i> Item #2.1.1</a>
													</li>
													<li>
														<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/#"><i className="fa fa-fw fa-plus"></i> Expand<b className="collapse-sign"><em className="fa fa-plus-square-o"></em></b></a>
														<ul>
															<li>
																<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/#"><i className="fa fa-fw fa-file-text"></i> File</a>
															</li>
															<li>
																<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/#"><i className="fa fa-fw fa-trash-o"></i> Delete</a></li>
														</ul>
													</li>
												</ul>
											</li>
										</ul>
									</li>
									<li>
										<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/#"><i className="fa fa-fw fa-folder-open"></i> Item #3<b className="collapse-sign"><em className="fa fa-plus-square-o"></em></b></a>
		
										<ul>
											<li>
												<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/#"><i className="fa fa-fw fa-folder-open"></i> 3ed Level <b className="collapse-sign"><em className="fa fa-plus-square-o"></em></b></a>
												<ul>
													<li>
														<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/#"><i className="fa fa-fw fa-file-text"></i> File</a>
													</li>
													<li>
														<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/#"><i className="fa fa-fw fa-file-text"></i> File</a>
													</li>
												</ul>
											</li>
										</ul>	
									</li>
									<li>
										<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/#" className="inactive"><i className="fa fa-fw fa-folder-open"></i> Item #4 (disabled)</a>
									</li>	
									
								</ul>
							</li>
						</ul>
					</li>		
					<li>
						<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/calendar.html"><i className="fa fa-lg fa-fw fa-calendar"><em>3</em></i> <span className="menu-item-parent">Calendar</span></a>
					</li>
					<li>
						<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/widgets.html"><i className="fa fa-lg fa-fw fa-list-alt"></i> <span className="menu-item-parent">Widgets</span></a>
					</li>
					<li>
						<a href="#"><i className="fa fa-lg fa-fw fa-puzzle-piece"></i> <span className="menu-item-parent">App Views</span><b className="collapse-sign"><em className="fa fa-plus-square-o"></em></b></a>
						<ul>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/projects.html"><i className="fa fa-file-text-o"></i> Projects</a>
							</li>	
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/blog.html"><i className="fa fa-paragraph"></i> Blog</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/gallery.html"><i className="fa fa-picture-o"></i> Gallery</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/#"><i className="fa fa-comments"></i> Forum Layout<b className="collapse-sign"><em className="fa fa-plus-square-o"></em></b></a>
								<ul>
									<li><a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/forum.html">General View</a></li>
									<li><a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/forum-topic.html">Topic View</a></li>
									<li><a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/forum-post.html">Post View</a></li>
								</ul>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/profile.html"><i className="fa fa-group"></i> Profile</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/timeline.html"><i className="fa fa-clock-o"></i> Timeline</a>
							</li>
						</ul>		
					</li>
					<li>
						<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/gmap-xml.html"><i className="fa fa-lg fa-fw fa-map-marker"></i> <span className="menu-item-parent">GMap Skins</span><span className="badge bg-color-greenLight pull-right inbox-badge">9</span></a>
					</li>
					<li>
						<a href="#"><i className="fa fa-lg fa-fw fa-windows"></i> <span className="menu-item-parent">Miscellaneous</span><b className="collapse-sign"><em className="fa fa-plus-square-o"></em></b></a>
						<ul>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/landingpage/" target="_blank">Landing Page <i className="fa fa-external-link"></i></a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/pricing-table.html">Pricing Tables</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/invoice.html">Invoice</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/login.html" target="_top">Login</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/register.html" target="_top">Register</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/lock.html" target="_top">Locked Screen</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/error404.html">Error 404</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/error500.html">Error 500</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/blank_.html">Blank Page</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/email-template.html">Email Template</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/search.html">Search Page</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/ckeditor.html">CK Editor</a>
							</li>
						</ul>
					</li>
					<li className="top-menu-invisible">
						<a href="#"><i className="fa fa-lg fa-fw fa-cube txt-color-blue"></i> <span className="menu-item-parent">SmartAdmin Intel</span><b className="collapse-sign"><em className="fa fa-plus-square-o"></em></b></a>
						<ul>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/difver.html"><i className="fa fa-stack-overflow"></i> Different Versions</a>
							</li>
							<li>
								<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/applayout.html"><i className="fa fa-cube"></i> App Settings</a>
							</li>
							<li>
								<a href="http://192.241.236.31/smartadmin/BUGTRACK/track_/documentation/index.html" target="_blank"><i className="fa fa-book"></i> Documentation</a>
							</li>
							<li>
								<a href="http://192.241.236.31/smartadmin/BUGTRACK/track_/" target="_blank"><i className="fa fa-bug"></i> Bug Tracker</a>
							</li>
							<li>
								<a href="http://myorange.ca/supportforum/" target="_blank"><i className="fa fa-wechat"></i> SmartAdmin Support</a>
							</li>
						</ul>
					</li>
					<li className="chat-users top-menu-invisible">
						<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/#"><i className="fa fa-lg fa-fw fa-comment-o"><em className="bg-color-pink flash animated">!</em></i> <span className="menu-item-parent">Smart Chat API <sup>beta</sup></span><b className="collapse-sign"><em className="fa fa-plus-square-o"></em></b></a>
						<ul>
							<li>
								<div className="display-users">

									<input className="form-control chat-user-filter" placeholder="Filter" type="text"/>
									
								  	<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/#" className="usr" data-chat-id="cha1" data-chat-fname="Sadi" data-chat-lname="Orlaf" data-chat-status="busy" data-chat-alertmsg="Sadi Orlaf is in a meeting. Please do not disturb!" data-chat-alertshow="true" data-rel="popover-hover" data-placement="right" data-html="true" data-content="
											&lt;div className=&#39;usr-card&#39;&gt;
												&lt;img src=&#39;img/avatars/5.png&#39; alt=&#39;Sadi Orlaf&#39;&gt;
												&lt;div className=&#39;usr-card-content&#39;&gt;
													&lt;h3&gt;Sadi Orlaf&lt;/h3&gt;
													&lt;p&gt;Marketing Executive&lt;/p&gt;
												&lt;/div&gt;
											&lt;/div&gt;
										" data-original-title="" title=""> 
									  	<i></i>Sadi Orlaf
								  	</a>
								  
									<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/#" className="usr" data-chat-id="cha2" data-chat-fname="Jessica" data-chat-lname="Dolof" data-chat-status="online" data-chat-alertmsg="" data-chat-alertshow="false" data-rel="popover-hover" data-placement="right" data-html="true" data-content="
											&lt;div className=&#39;usr-card&#39;&gt;
												&lt;img src=&#39;img/avatars/1.png&#39; alt=&#39;Jessica Dolof&#39;&gt;
												&lt;div className=&#39;usr-card-content&#39;&gt;
													&lt;h3&gt;Jessica Dolof&lt;/h3&gt;
													&lt;p&gt;Sales Administrator&lt;/p&gt;
												&lt;/div&gt;
											&lt;/div&gt;
										" data-original-title="" title=""> 
									  	<i></i>Jessica Dolof
									</a>
								  
									<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/#" className="usr" data-chat-id="cha3" data-chat-fname="Zekarburg" data-chat-lname="Almandalie" data-chat-status="online" data-rel="popover-hover" data-placement="right" data-html="true" data-content="
											&lt;div className=&#39;usr-card&#39;&gt;
												&lt;img src=&#39;img/avatars/3.png&#39; alt=&#39;Zekarburg Almandalie&#39;&gt;
												&lt;div className=&#39;usr-card-content&#39;&gt;
													&lt;h3&gt;Zekarburg Almandalie&lt;/h3&gt;
													&lt;p&gt;Sales Admin&lt;/p&gt;
												&lt;/div&gt;
											&lt;/div&gt;
										" data-original-title="" title=""> 
									  	<i></i>Zekarburg Almandalie
									</a>
								 
									<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/#" className="usr" data-chat-id="cha4" data-chat-fname="Barley" data-chat-lname="Krazurkth" data-chat-status="away" data-rel="popover-hover" data-placement="right" data-html="true" data-content="
											&lt;div className=&#39;usr-card&#39;&gt;
												&lt;img src=&#39;img/avatars/4.png&#39; alt=&#39;Barley Krazurkth&#39;&gt;
												&lt;div className=&#39;usr-card-content&#39;&gt;
													&lt;h3&gt;Barley Krazurkth&lt;/h3&gt;
													&lt;p&gt;Sales Director&lt;/p&gt;
												&lt;/div&gt;
											&lt;/div&gt;
										" data-original-title="" title=""> 
									  	<i></i>Barley Krazurkth
									</a>
								  
									<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/#" className="usr offline" data-chat-id="cha5" data-chat-fname="Farhana" data-chat-lname="Amrin" data-chat-status="incognito" data-rel="popover-hover" data-placement="right" data-html="true" data-content="
											&lt;div className=&#39;usr-card&#39;&gt;
												&lt;img src=&#39;img/avatars/female.png&#39; alt=&#39;Farhana Amrin&#39;&gt;
												&lt;div className=&#39;usr-card-content&#39;&gt;
													&lt;h3&gt;Farhana Amrin&lt;/h3&gt;
													&lt;p&gt;Support Admin &lt;small&gt;&lt;i className=&#39;fa fa-music&#39;&gt;&lt;/i&gt; Playing Beethoven Classics&lt;/small&gt;&lt;/p&gt;
												&lt;/div&gt;
											&lt;/div&gt;
										" data-original-title="" title=""> 
									  	<i></i>Farhana Amrin (offline)
									</a>
								  
									<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/#" className="usr offline" data-chat-id="cha6" data-chat-fname="Lezley" data-chat-lname="Jacob" data-chat-status="incognito" data-rel="popover-hover" data-placement="right" data-html="true" data-content="
											&lt;div className=&#39;usr-card&#39;&gt;
												&lt;img src=&#39;img/avatars/male.png&#39; alt=&#39;Lezley Jacob&#39;&gt;
												&lt;div className=&#39;usr-card-content&#39;&gt;
													&lt;h3&gt;Lezley Jacob&lt;/h3&gt;
													&lt;p&gt;Sales Director&lt;/p&gt;
												&lt;/div&gt;
											&lt;/div&gt;
										" data-original-title="" title=""> 
									  	<i></i>Lezley Jacob (offline)
									</a>
									
									<a href="http://192.241.236.31/themes/preview/smartadmin/1.7.x/ajaxversion/ajax/chat.html" className="btn btn-xs btn-default btn-block sa-chat-learnmore-btn">About the API</a>

								</div>
							</li>
						</ul>	
					</li>
				</ul>
			</nav>
			<span className="minifyme" data-action="minifyMenu"> <i className="fa fa-arrow-circle-left hit"></i> </span>

		</aside>
			);
	}
});
module.exports = AsideApp;