import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'
 
class ScrollReveal{
    constructor(domItem ,offset){
        this.itemsToReveal = $(domItem);
        this.hideInitial();
        this.createWaypoints(offset);
    }

    hideInitial(){
        this.itemsToReveal.addClass("reveal-item");
    }

    createWaypoints(offset){
        this.itemsToReveal.each(function(){
            var currentDomItem = this;
            new Waypoint({
                element: currentDomItem,
                handler: function(){
                    $(currentDomItem).addClass("reveal-item--visible");
                },
                offset: offset
            });
        });
    }

}

export default ScrollReveal;
