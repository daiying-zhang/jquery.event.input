/**
 * @fileOverview
 * @author daiying.zhang
 */
(function($){
    $.event.special.input = {
        setup : function(){
            var $this = $(this);
            $.data($this, 'special-input', true);
            //IE低版本不支持input事件，用onpropertychange事件
            if('attachEvent' in this){
                this.attachEvent('onpropertychange', function(e){
                    e = e || window.event;
                    //如果是value改变，触发input事件
                    if(e.propertyName === 'value'){
                        $this.trigger('input',[])
                    }
                })
                return true
            }
            return false
        },
        teardown : function(){
            var $this = $(this);
            if($.data($this, 'special-input') === true){
                this.dispatchEvent('onpropertychange')
            }
        }
    }
})(jQuery)