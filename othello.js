$(function(){
    
    var numbers = []
    for (let i = 0; i < 30; i++) {
        numbers.push(i);
    }

    // 石を置ける位置関数
    function ableToPut(yourColor,enemyColor){
        for(let i = 0; i < 16; i++) {
            function canPutStone(stone){
                function numChange(i){
                    return stone + i;
                };
        
                var me = yourColor;
                var enemy = enemyColor;
        
                var min = [];
                for (let i = 0; i < 30; i++) {
                    min.push(numChange(-i));
                };
                var plu = [];
                for (let i = 0; i < 30; i++) {
                    plu.push(numChange(i));
                };
        
                if(stone % 4 == 0 && $('p').eq(plu[1]).hasClass(enemy) ){
                    if($('p').eq(plu[2]).hasClass(me)){
                        $('p').eq(stone).addClass('youCanPutStone');
                    } else if($('p').eq(plu[2]).hasClass(enemy) && $('p').eq(plu[3]).hasClass(me)){
                        $('p').eq(stone).addClass('youCanPutStone');
                    } 
                }
        
                if(stone % 4 == 1){
                    if($('p').eq(plu[1]).hasClass(enemy) && $('p').eq(plu[2]).hasClass(me)){
                        $('p').eq(stone).addClass('youCanPutStone');
                    } 
                }
        
                if(stone % 4 == 2){
                    if($('p').eq(min[1]).hasClass(enemy) && $('p').eq(min[2]).hasClass(me)){
                        $('p').eq(stone).addClass('youCanPutStone');
                    } 
                }
        
                if(stone % 4 == 3 && $('p').eq(min[1]).hasClass(enemy)){
                    if($('p').eq(min[2]).hasClass(me)){
                        $('p').eq(stone).addClass('youCanPutStone');
                    } else if($('p').eq(min[2]).hasClass(enemy) && $('p').eq(min[3]).hasClass(me)){
                        $('p').eq(stone).addClass('youCanPutStone');
                    } 
                };
        
                var syou = Math.floor(stone / 4);
                if(syou == 0){
                    if($('p').eq(plu[4]).hasClass(enemy) && $('p').eq(plu[8]).hasClass(me)){
                        $('p').eq(stone).addClass('youCanPutStone');
                    } else if($('p').eq(plu[4]).hasClass(enemy) && $('p').eq(plu[8]).hasClass(enemy) && $('p').eq(plu[12]).hasClass(me)){
                        $('p').eq(stone).addClass('youCanPutStone');
                    }
                }
                
                if(syou == 1){
                    if($('p').eq(plu[4]).hasClass(enemy) && $('p').eq(plu[8]).hasClass(me)){
                        $('p').eq(stone).addClass('youCanPutStone');
                    };
                };
                    
                if(syou == 2){
                    if($('p').eq(min[4]).hasClass(enemy) && $('p').eq(min[8]).hasClass(me)){
                        $('p').eq(stone).addClass('youCanPutStone');
                    }
                };
        
                if(syou == 3){
                    if($('p').eq(min[4]).hasClass(enemy) && $('p').eq(min[8]).hasClass(me)){
                        $('p').eq(stone).addClass('youCanPutStone');
                    } else if($('p').eq(min[4]).hasClass(enemy) && $('p').eq(min[8]).hasClass(enemy) && $('p').eq(min[12]).hasClass(me)){
                        $('p').eq(stone).addClass('youCanPutStone');
                    }
                };
                
                if(stone == 0){
                    if($('p').eq(5).hasClass(enemy)){
                        if($('p').eq(10).hasClass(me)){
                            $('p').eq(stone).addClass('youCanPutStone');
                        } else if($('p').eq(10).hasClass(enemy)){
                            if($('p').eq(15).hasClass(me)){
                                $('p').eq(stone).addClass('youCanPutStone');
                            };
                        };
                    };
                };
                
                if(stone == 1 || stone == 4){
                    if($('p').eq(stone + 5).hasClass(enemy)){
                        if($('p').eq(stone + 10).hasClass(me)){
                            $('p').eq(stone).addClass('youCanPutStone');
                        };
                    };
                };
        
                if(stone == 3){
                    if($('p').eq(6).hasClass(enemy)){
                        if($('p').eq(9).hasClass(me)){
                            $('p').eq(stone).addClass('youCanPutStone');
                        } else if($('p').eq(9).hasClass(enemy)){
                            if($('p').eq(12).hasClass(me)){
                                $('p').eq(stone).addClass('youCanPutStone');
                            };
                        };
                    };
                };
        
                if(stone == 2 || stone == 7){
                    if($('p').eq(stone + 3).hasClass(enemy)){
                        if($('p').eq(stone + 6).hasClass(me)){
                            $('p').eq(stone).addClass('youCanPutStone');
                        };
                    };
                };
        
                if(stone == 15){
                    if($('p').eq(10).hasClass(enemy)){
                        if($('p').eq(5).hasClass(me)){
                            $('p').eq(stone).addClass('youCanPutStone');
                        } else if($('p').eq(5).hasClass(enemy)){
                            if($('p').eq(0).hasClass(me)){
                                $('p').eq(stone).addClass('youCanPutStone');
                            };
                        };
                    };
                };
        
                if(stone == 11 || stone == 14){
                    if($('p').eq(stone - 5).hasClass(enemy)){
                        if($('p').eq(stone - 10).hasClass(me)){
                            $('p').eq(stone).addClass('youCanPutStone');
                        };
                    };
                };
        
                if(stone == 12){
                    if($('p').eq(9).hasClass(enemy)){
                        if($('p').eq(6).hasClass(me)){
                            $('p').eq(stone).addClass('youCanPutStone');
                        } else if($('p').eq(6).hasClass(enemy)){
                            if($('p').eq(3).hasClass(me)){
                                $('p').eq(stone).addClass('youCanPutStone');
                            };
                        };
                    };
                };
        
                if(stone == 8 || stone == 13){
                    if($('p').eq(stone - 3).hasClass(enemy)){
                        if($('p').eq(stone - 6).hasClass(me)){
                            $('p').eq(stone).addClass('youCanPutStone');
                        };
                    };
                };
        
            };
            canPutStone(i);
        }
    }

    ableToPut("black","white");

    // ターン終了後石を置ける位置リセット  
    function positionReset(){
        for (let i = 0; i < 16; i++) {
            if($('p').eq(i).hasClass("youCanPutStone")){
                $('p').eq(i).removeClass("youCanPutStone");
            };
        };
    };

    // ターン表示
    if($('.kuro').hasClass('yourTurn')){
        document.querySelector('.turn').textContent = "あなたのターンです";
    };
    if($('.siro').hasClass('yourTurn')){
        document.querySelector('.turn').textContent = "あなたのターンです";
    };

    // パス
    $('.pass').click(function(){
        $('.kuro').toggleClass('yourTurn');
        $('.siro').toggleClass('yourTurn');
        if($('.kuro').hasClass('yourTurn')){
            document.querySelector('.turn').textContent = "あなたのターンです";
            positionReset();
            ableToPut("black","white");
        };
        if($('.siro').hasClass('yourTurn')){
            document.querySelector('.turn').textContent = "てきのターンです";
            positionReset();
            ableToPut("white","black");
        };
    });

    // クリック
    $('p').click(function(){  

        var okerukadouka = 0;
        
        if($(this).hasClass("youCanPutStone")){

        }else{
            okerukadouka++;
        };

        if(okerukadouka == 0){
        // 色選択
        // 黒
            if($('.kuro').hasClass('yourTurn')){
                var me = "black";
                var enemy = "white";
                $(this).addClass(me);
                var num = Number($(this).attr('data-koji'));

                function numChange(i){
                    return num + i;
                };

                var min = [];
                for (let i = 0; i < 30; i++) {
                    min.push(numChange(-i));
                }
                var plu = [];
                for (let i = 0; i < 30; i++) {
                    plu.push(numChange(i));
                }

                // 横

                if(num % 4 == 0 && $('p').eq(plu[1]).hasClass(enemy) ){
                    if($('p').eq(plu[2]).hasClass(me)){
                        $('p').eq(plu[1]).removeClass(enemy).addClass(me);
                    } else if($('p').eq(plu[2]).hasClass(enemy) && $('p').eq(plu[3]).hasClass(me)){
                        $('p').eq(plu[1]).removeClass(enemy).addClass(me);
                        $('p').eq(plu[2]).removeClass(enemy).addClass(me);
                    }
                }

                if(num % 4 == 1){
                    if($('p').eq(plu[1]).hasClass(enemy) && $('p').eq(plu[2]).hasClass(me)){
                        $('p').eq(plu[1]).removeClass(enemy).addClass(me);
                    }
                }

                if(num % 4 == 2){
                    if($('p').eq(min[1]).hasClass(enemy) && $('p').eq(min[2]).hasClass(me)){
                        $('p').eq(min[1]).removeClass(enemy).addClass(me);
                    }
                }

                if(num % 4 == 3 && $('p').eq(min[1]).hasClass(enemy)){
                    if($('p').eq(min[2]).hasClass(me)){
                        $('p').eq(min[1]).removeClass(enemy).addClass(me);
                    } else if($('p').eq(min[2]).hasClass(enemy) && $('p').eq(min[3]).hasClass(me)){
                        $('p').eq(min[1]).removeClass(enemy).addClass(me);
                        $('p').eq(min[2]).removeClass(enemy).addClass(me);
                    }
                }

                // 縦

                var syou = Math.floor(num / 4);
                if(syou == 0){
                    if($('p').eq(plu[4]).hasClass(enemy) && $('p').eq(plu[8]).hasClass(me)){
                        $('p').eq(plu[4]).removeClass(enemy).addClass(me);
                    } else if($('p').eq(plu[4]).hasClass(enemy) && $('p').eq(plu[8]).hasClass(enemy) && $('p').eq(plu[12]).hasClass(me)){
                        $('p').eq(plu[4]).removeClass(enemy).addClass(me);
                        $('p').eq(plu[8]).removeClass(enemy).addClass(me);
                    }
                }
                
                if(syou == 1){
                    if($('p').eq(plu[4]).hasClass(enemy) && $('p').eq(plu[8]).hasClass(me)){
                        $('p').eq(plu[4]).removeClass(enemy).addClass(me);
                    };
                };
                    
                if(syou == 2){
                    if($('p').eq(min[4]).hasClass(enemy) && $('p').eq(min[8]).hasClass(me)){
                        $('p').eq(min[4]).removeClass(enemy).addClass(me);
                    }
                };

                if(syou == 3){
                    if($('p').eq(min[4]).hasClass(enemy) && $('p').eq(min[8]).hasClass(me)){
                        $('p').eq(min[4]).removeClass(enemy).addClass(me);
                    } else if($('p').eq(min[4]).hasClass(enemy) && $('p').eq(min[8]).hasClass(enemy) && $('p').eq(min[12]).hasClass(me)){
                        $('p').eq(min[4]).removeClass(enemy).addClass(me);
                        $('p').eq(min[8]).removeClass(enemy).addClass(me);
                    }
                };

                // 斜め

                if(num == 0){
                    if($('p').eq(5).hasClass(enemy)){
                        if($('p').eq(10).hasClass(me)){
                            $('p').eq(5).removeClass(enemy).addClass(me);
                        } else if($('p').eq(10).hasClass(enemy)){
                            if($('p').eq(15).hasClass(me)){
                                $('p').eq(5).removeClass(enemy).addClass(me);
                                $('p').eq(10).removeClass(enemy).addClass(me);
                            };
                        };
                    };
                };
                
                if(num == 1 || num == 4){
                    if($('p').eq(num + 5).hasClass(enemy)){
                        if($('p').eq(num + 10).hasClass(me)){
                            $('p').eq(num + 5).removeClass(enemy).addClass(me);
                        };
                    };
                };

                if(num == 3){
                    if($('p').eq(6).hasClass(enemy)){
                        if($('p').eq(9).hasClass(me)){
                            $('p').eq(6).removeClass(enemy).addClass(me);
                        } else if($('p').eq(9).hasClass(enemy)){
                            if($('p').eq(12).hasClass(me)){
                                $('p').eq(6).removeClass(enemy).addClass(me);
                                $('p').eq(9).removeClass(enemy).addClass(me);
                            };
                        };
                    };
                };

                if(num == 2 || num == 7){
                    if($('p').eq(num + 3).hasClass(enemy)){
                        if($('p').eq(num + 6).hasClass(me)){
                            $('p').eq(num + 3).removeClass(enemy).addClass(me);
                        };
                    };
                };

                if(num == 15){
                    if($('p').eq(10).hasClass(enemy)){
                        if($('p').eq(5).hasClass(me)){
                            $('p').eq(10).removeClass(enemy).addClass(me);
                        } else if($('p').eq(5).hasClass(enemy)){
                            if($('p').eq(0).hasClass(me)){
                                $('p').eq(10).removeClass(enemy).addClass(me);
                                $('p').eq(5).removeClass(enemy).addClass(me);
                            };
                        };
                    };
                };

                if(num == 11 || num == 14){
                    if($('p').eq(num - 5).hasClass(enemy)){
                        if($('p').eq(num - 10).hasClass(me)){
                            $('p').eq(num - 5).removeClass(enemy).addClass(me);
                        };
                    };
                };

                if(num == 12){
                    if($('p').eq(9).hasClass(enemy)){
                        if($('p').eq(6).hasClass(me)){
                            $('p').eq(9).removeClass(enemy).addClass(me);
                        } else if($('p').eq(6).hasClass(enemy)){
                            if($('p').eq(3).hasClass(me)){
                                $('p').eq(9).removeClass(enemy).addClass(me);
                                $('p').eq(6).removeClass(enemy).addClass(me);
                            };
                        };
                    };
                };

                if(num == 8 || num == 13){
                    if($('p').eq(num - 3).hasClass(enemy)){
                        if($('p').eq(num - 6).hasClass(me)){
                            $('p').eq(num - 3).removeClass(enemy).addClass(me);
                        };
                    };
                };

                // var blackPoint = $('.black').length;
                // document.getElementById('point1').textContent = blackPoint;


                // var whitePoint = $('.white').length;
                // document.getElementById('point2').textContent = whitePoint;

                positionReset();
                ableToPut("white","black");

                $('.kuro').removeClass('yourTurn');
                $('.siro').addClass('yourTurn');
                document.querySelector('.turn').textContent = "てきのターンです";


            } else if($('.siro').hasClass('yourTurn')){
                var me = "white";
                var enemy = "black";
                $(this).addClass(me);
                var num = Number($(this).attr('data-koji'));

                function numChange(i){
                    return num + i;
                };

                var min = [];
                for (let i = 0; i < 30; i++) {
                    min.push(numChange(-i));
                }
                var plu = [];
                for (let i = 0; i < 30; i++) {
                    plu.push(numChange(i));
                }

                // 横

                if(num % 4 == 0){
                    if($('p').eq(plu[1]).hasClass(enemy) && $('p').eq(plu[2]).hasClass(me)){
                        $('p').eq(plu[1]).removeClass(enemy).addClass(me);
                    } else if($('p').eq(plu[1]).hasClass(enemy) && $('p').eq(plu[2]).hasClass(enemy) && $('p').eq(plu[3]).hasClass(me)){
                        $('p').eq(plu[1]).removeClass(enemy).addClass(me);
                        $('p').eq(plu[2]).removeClass(enemy).addClass(me);
                    }
                }

                if(num % 4 == 1){
                    if($('p').eq(plu[1]).hasClass(enemy) && $('p').eq(plu[2]).hasClass(me)){
                        $('p').eq(plu[1]).removeClass(enemy).addClass(me);
                    }
                }

                if(num % 4 == 2){
                    if($('p').eq(min[1]).hasClass(enemy) && $('p').eq(min[2]).hasClass(me)){
                        $('p').eq(min[1]).removeClass(enemy).addClass(me);
                    }
                }

                if(num % 4 == 3){
                    if($('p').eq(min[1]).hasClass(enemy) && $('p').eq(min[2]).hasClass(me)){
                        $('p').eq(min[1]).removeClass(enemy).addClass(me);
                    } else if($('p').eq(min[1]).hasClass(enemy) && $('p').eq(min[2]).hasClass(enemy) && $('p').eq(min[3]).hasClass(me)){
                        $('p').eq(min[1]).removeClass(enemy).addClass(me);
                        $('p').eq(min[2]).removeClass(enemy).addClass(me);
                    }
                }

                // // 縦

                var syou = Math.floor(num / 4);
                if(syou == 0){
                    if($('p').eq(plu[4]).hasClass(enemy) && $('p').eq(plu[8]).hasClass(me)){
                        $('p').eq(plu[4]).removeClass(enemy).addClass(me);
                    } else if($('p').eq(plu[4]).hasClass(enemy) && $('p').eq(plu[8]).hasClass(enemy) && $('p').eq(plu[12]).hasClass(me)){
                        $('p').eq(plu[4]).removeClass(enemy).addClass(me);
                        $('p').eq(plu[8]).removeClass(enemy).addClass(me);
                    }
                }
                
                if(syou == 1){
                    if($('p').eq(plu[4]).hasClass(enemy) && $('p').eq(plu[8]).hasClass(me)){
                        $('p').eq(plu[4]).removeClass(enemy).addClass(me);
                    };
                };


                    
                if(syou == 2){
                    if($('p').eq(min[4]).hasClass(enemy) && $('p').eq(min[8]).hasClass(me)){
                        $('p').eq(min[4]).removeClass(enemy).addClass(me);
                    }
                };

                if(syou == 3){
                    if($('p').eq(min[4]).hasClass(enemy) && $('p').eq(min[8]).hasClass(me)){
                        $('p').eq(min[4]).removeClass(enemy).addClass(me);
                    } else if($('p').eq(min[4]).hasClass(enemy) && $('p').eq(min[8]).hasClass(enemy) && $('p').eq(min[12]).hasClass(me)){
                        $('p').eq(min[4]).removeClass(enemy).addClass(me);
                        $('p').eq(min[8]).removeClass(enemy).addClass(me);
                    }
                };
                // 斜め

                if(num == 0){
                    if($('p').eq(5).hasClass(enemy)){
                        if($('p').eq(10).hasClass(me)){
                            $('p').eq(5).removeClass(enemy).addClass(me);
                        } else if($('p').eq(10).hasClass(enemy)){
                            if($('p').eq(15).hasClass(me)){
                                $('p').eq(5).removeClass(enemy).addClass(me);
                                $('p').eq(10).removeClass(enemy).addClass(me);
                            };
                        };
                    };
                };
                
                if(num == 1 || num == 4){
                    if($('p').eq(num + 5).hasClass(enemy)){
                        if($('p').eq(num + 10).hasClass(me)){
                            $('p').eq(num + 5).removeClass(enemy).addClass(me);
                        };
                    };
                };

                if(num == 3){
                    if($('p').eq(6).hasClass(enemy)){
                        if($('p').eq(9).hasClass(me)){
                            $('p').eq(6).removeClass(enemy).addClass(me);
                        } else if($('p').eq(9).hasClass(enemy)){
                            if($('p').eq(12).hasClass(me)){
                                $('p').eq(6).removeClass(enemy).addClass(me);
                                $('p').eq(9).removeClass(enemy).addClass(me);
                            };
                        };
                    };
                };

                if(num == 2 || num == 7){
                    if($('p').eq(num + 3).hasClass(enemy)){
                        if($('p').eq(num + 6).hasClass(me)){
                            $('p').eq(num + 3).removeClass(enemy).addClass(me);
                        };
                    };
                };

                if(num == 15){
                    if($('p').eq(10).hasClass(enemy)){
                        if($('p').eq(5).hasClass(me)){
                            $('p').eq(10).removeClass(enemy).addClass(me);
                        } else if($('p').eq(5).hasClass(enemy)){
                            if($('p').eq(0).hasClass(me)){
                                $('p').eq(10).removeClass(enemy).addClass(me);
                                $('p').eq(5).removeClass(enemy).addClass(me);
                            };
                        };
                    };
                };

                if(num == 11 || num == 14){
                    if($('p').eq(num - 5).hasClass(enemy)){
                        if($('p').eq(num - 10).hasClass(me)){
                            $('p').eq(num - 5).removeClass(enemy).addClass(me);
                        };
                    };
                };

                if(num == 12){
                    if($('p').eq(9).hasClass(enemy)){
                        if($('p').eq(6).hasClass(me)){
                            $('p').eq(9).removeClass(enemy).addClass(me);
                        } else if($('p').eq(6).hasClass(enemy)){
                            if($('p').eq(3).hasClass(me)){
                                $('p').eq(9).removeClass(enemy).addClass(me);
                                $('p').eq(6).removeClass(enemy).addClass(me);
                            };
                        };
                    };
                };

                if(num == 8 || num == 13){
                    if($('p').eq(num - 3).hasClass(enemy)){
                        if($('p').eq(num - 6).hasClass(me)){
                            $('p').eq(num - 3).removeClass(enemy).addClass(me);
                        };
                    };
                };
            
                positionReset();
                ableToPut("black","white");


                $('.siro').removeClass('yourTurn');
                $('.kuro').addClass('yourTurn');
                document.querySelector('.turn').textContent = "あなたのターンです";

            };

        }
        var stones = $('.white').length + $('.black').length;
        if(stones == 16){
            $('.result').fadeIn(2000);

            if($('.white').length == $('.black').length){
                document.querySelector('.winner').textContent = 'ひきわけ';
            } else if($('.white').length > $('.black').length){
                document.querySelector('.winner').textContent = '白の勝ち';
            } else {
                document.querySelector('.winner').textContent = '黒の勝ち';
            };
        };
    });

    $('#again').click(function(){
        document.location.reload();
    });


    $('.restart').click(function(){
        document.location.reload();
    })

});