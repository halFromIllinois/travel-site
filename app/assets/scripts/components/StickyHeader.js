import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';


class StickyHeader { 
    constructor(effectItem, triggerItem){
        this.lazyImages = $(".lazyload");
        this.effectItemSelector = $(effectItem);
        this.triggerElement = $(triggerItem);
        this.createWaypoint();
        this.pageSections = $(".page-section");
        this.headerLinks = $(".primary-nav a");
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
        this.refreshWaypoints();
    }

    refreshWaypoints(){
        this.lazyImages.on('load', function(){
            Waypoint.refreshAll();
        });
    }

    addSmoothScrolling(){
        this.headerLinks.smoothScroll();
    }

    createWaypoint(){
        var that = this;
            new Waypoint({
                element: this.triggerElement[0],
                handler: function(direction){
                    if (direction =="down"){
                        that.effectItemSelector.addClass("site-header--darker-bkgrd");
                    } else {
                        that.effectItemSelector.removeClass("site-header--darker-bkgrd");
                    }
                }
            });
    }

    createPageSectionWaypoints(){
        var that = this;
        var offset;
        this.pageSections.each(function(){
            var currentPageSection = this;

            new Waypoint({
                element: currentPageSection,
                handler: function(direction){
                    if(direction == "down") {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link")
                        $(matchingHeaderLink).addClass("is-current-link")
                    }
                },
                offset: "20%"
            });

            new Waypoint({
                element: currentPageSection,
                handler: function(direction){
                    if(direction == "up") {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link")
                        $(matchingHeaderLink).addClass("is-current-link")
                    }
                },
                offset: "-40%"
            });
        });
    }
}

export default StickyHeader;
