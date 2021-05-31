const discord = require('discord.js')
const client = new discord.Client();
const cooldown = new Set();

client.on('ready', () => {

    console.log('Readyyy')

})

client.on('message', message  => {

    const args = message.content.slice().trim().split(' ');

    if(args[0] == '+ping'){
        message.channel.send(`Indihome network: ${Date.now() - message.createdTimestamp}ms.`)
    }

    if(args[0] == '+help'){
        const embed = new discord.MessageEmbed()
        .setTitle('GabutOnlen Help')
        .setColor('#2c75db')
        .setDescription(':hammer: Daftar command di GabutOnlen bot yang bisa kamu pakai __**KAPAN AJA**__')
        .addField('+ping', ':robot: Buat ngetes kalo bot onlen bang', true)
        .addField('+say', ':speaking_head: Chat sesuatu sebagai bot bang', true)
        .addField('+tanya', ':question: Tanya sesuatu ke bot yang __~~**SANTUN**~~__ bang', true)
        .addField('+tganteng', ':adult: Cek kegantengan mu bang', true)
        .addField('+tcocokartis', ':person_red_hair: Cek seberapa cocok kamu menjadi artis bang', true)
        .addField('+tdoi', ':heart: Cek seberapa cinta doi sama kamu bang', true)
        .addField('+tlove', ':sparkling_heart: Cek seberapa cinta seseorang sama kamu bang', true)
        .addField('+tpikiran', ':brain: Test apa yang ada di pikiran orang lain bang', true)
        .setTimestamp();
        message.channel.send(embed);
    }

    if(args[0] == '+say'){
        if(!args[1]){
            message.channel.send('Gw harus ngomong apa :face_with_symbols_over_mouth:')
        } else {
            message.channel.send(message.content.substr(5))
        }
    }

    if(args[0] == '+tanya'){
        let jawaban = ["iya", "gak tau", "nggak", "Apaansi", "Ha? oke", "Kamu siapa?", "Napa nanya aku?", "Dih, sok asik", "Gajelas aowkaowaok"];

        if(!args[1]){
            message.channel.send('Mo nanya apasi :face_with_symbols_over_mouth:')
        } else {
            const embed = new discord.MessageEmbed()
            .setTitle('Tanya & Jawab')
            .setColor('#2c75db')
            .addField('Pertanyaan', message.content.substr(6), false)
            .addField('Jawaban', jawaban[Math.floor(Math.random() * jawaban.length)], false)
            .setTimestamp()
            message.channel.send(embed);
        }
    }

    if(args[0] == `+nitro`) {
        if (cooldown.has(message.author.id)) {
            message.channel.send("Tunggu 10 detik ya :). <@" + message.author.id + ">");
        } else {
        message.channel.send('Nitro code generating Bahasa Indonesia').then((msg) => {
            msg.edit('Memulai operasi.').then((msg) => {
                setTimeout(() => {
                    msg.edit('Hacking discord database..').then((msg) => {
                        setTimeout(() => {
                            msg.edit('Mengumpulkan beberapa informasi...').then((msg) => {
                                setTimeout(() => {
                                    msg.edit('Memeriksa discord security....').then((msg) => {
                                        setTimeout(() => {
                                            msg.edit('Menghack discord security.....').then((msg) => {
                                                setTimeout(() => {
                                                    msg.edit(':x: Gagal untuk menghack discord')
                                                    setTimeout(() => {
                                                        msg.channel.send('Tapi boong yahayahhayuk palpalepalplepaleple')
                                                        msg.channel.send('Beli lah sono kasihan developer discord')
                                                    }, 2000)
                                                }, 1000)
                                            })
                                        }, 1000)
                                    })
                                }, 1000)    
                            })
                        }, 1000)
                    })
                }, 1000)
            })
        })
        cooldown.add(message.author.id);
        setTimeout(() => {
            cooldown.delete(message.author.id)
        }, 10000)
    }
    }

    if(args[0] == '+tganteng'){
        let mention = message.mentions.members.first();

        if(mention){
            const embed = new discord.MessageEmbed()
            .setTitle(':adult: Test kegantengan')
            .setColor('#2c75db')
            .setDescription(`Mengscan mata, mulut, telinga dari ${mention}...`)
            .setTimestamp();

            const embed1 = new discord.MessageEmbed()
            .setTitle(':adult: Test kegantengan')
            .setColor('#2c75db')
            .setDescription(`Mengscan hati, jantung, otak dari ${mention}...`)
            .setTimestamp();

            const embed2 = new discord.MessageEmbed()
            .setTitle(':adult: Test kegantengan')
            .setColor('#2c75db')
            .setDescription(`Mengscan muka dari ${mention}...`)
            .setTimestamp();

            const embed3 = new discord.MessageEmbed()
            .setTitle(':adult: Test kegantengan')
            .setColor('#2bff00')
            .setDescription(`Mengumpulkan informasi berhasil! hasil akan di ungkapkan dalam 3...`)
            .setTimestamp();

            const embed4 = new discord.MessageEmbed()
            .setTitle(':adult: Test kegantengan')
            .setColor('#fffb00')
            .setDescription(`Mengumpulkan informasi berhasil! hasil akan di ungkapkan dalam 2...`)
            .setTimestamp();

            const embed5 = new discord.MessageEmbed()
            .setTitle(':adult: Test kegantengan')
            .setColor('#ff0000')
            .setDescription(`Mengumpulkan informasi berhasil! hasil akan di ungkapkan dalam 1...`)
            .setTimestamp();

            const embed6 = new discord.MessageEmbed()
            .setTitle(':adult: Test kegantengan')
            .setColor('#2c75db')
            .setDescription(`${mention} mencapai ${Math.floor(Math.random() * 101)}% kegantengan!`)
            .setTimestamp();

            message.channel.send(embed).then((msg) => {
                setTimeout(() => {
                    msg.edit(embed1).then((msg) => {
                        setTimeout(() => {
                          msg.edit(embed2).then((msg) => {
                              setTimeout(() => {
                                msg.edit(embed3).then((msg) => {
                                    setTimeout(() => {
                                        msg.edit(embed4).then((msg) => {
                                            setTimeout(() => {
                                                msg.edit(embed5).then((msg) => {
                                                    setTimeout(() => {
                                                        msg.edit(embed6)
                                                    }, 1000);
                                                })
                                            }, 1000);
                                        })
                                    }, 1000);
                                })
                              }, 1000);
                          })  
                        }, 1000);
                    })
                }, 1000)
            })
        } else {
            const embed = new discord.MessageEmbed()
            .setTitle(':adult: Test kegantengan')
            .setColor('#2c75db')
            .setDescription(`Mengscan mata, mulut, telinga Anda...`)
            .setTimestamp();

            const embed1 = new discord.MessageEmbed()
            .setTitle(':adult: Test kegantengan')
            .setColor('#2c75db')
            .setDescription(`Mengscan hati, jantung, otak Anda...`)
            .setTimestamp();

            const embed2 = new discord.MessageEmbed()
            .setTitle(':adult: Test kegantengan')
            .setColor('#2c75db')
            .setDescription(`Mengscan muka Anda...`)
            .setTimestamp();

            const embed3 = new discord.MessageEmbed()
            .setTitle(':adult: Test kegantengan')
            .setColor('#2bff00')
            .setDescription(`Mengumpulkan informasi berhasil! hasil akan di ungkapkan dalam 3...`)
            .setTimestamp();

            const embed4 = new discord.MessageEmbed()
            .setTitle(':adult: Test kegantengan')
            .setColor('#fffb00')
            .setDescription(`Mengumpulkan informasi berhasil! hasil akan di ungkapkan dalam 2...`)
            .setTimestamp();

            const embed5 = new discord.MessageEmbed()
            .setTitle(':adult: Test kegantengan')
            .setColor('#ff0000')
            .setDescription(`Mengumpulkan informasi berhasil! hasil akan di ungkapkan dalam 1...`)
            .setTimestamp();

            const embed6 = new discord.MessageEmbed()
            .setTitle(':adult: Test kegantengan')
            .setColor('#2c75db')
            .setDescription(`Anda mencapai ${Math.floor(Math.random() * 101)}% kegantengan!`)
            .setTimestamp();

            message.channel.send(embed).then((msg) => {
                setTimeout(() => {
                    msg.edit(embed1).then((msg) => {
                        setTimeout(() => {
                          msg.edit(embed2).then((msg) => {
                              setTimeout(() => {
                                msg.edit(embed3).then((msg) => {
                                    setTimeout(() => {
                                        msg.edit(embed4).then((msg) => {
                                            setTimeout(() => {
                                                msg.edit(embed5).then((msg) => {
                                                    setTimeout(() => {
                                                        msg.edit(embed6)
                                                    }, 1000);
                                                })
                                            }, 1000);
                                        })
                                    }, 1000);
                                })
                              }, 1000);
                          })  
                        }, 1000);
                    })
                }, 1000)
            })
        }
    }

        if(args[0] == '+tcocokartis'){
            let mention = message.mentions.members.first();
    
            if(mention){
                const embed = new discord.MessageEmbed()
                .setTitle(':person_red_hair: Test kecocokan menjadi artis')
                .setColor('#2c75db')
                .setDescription(`Mengscan Rambut, muka, mulut dari ${mention}...`)
                .setTimestamp();
    
                const embed1 = new discord.MessageEmbed()
                .setTitle(':person_red_hair: Test kecocokan menjadi artis')
                .setColor('#2c75db')
                .setDescription(`Mengscan Oprasi plastik dari ${mention}...`)
                .setTimestamp();
    
                const embed2 = new discord.MessageEmbed()
                .setTitle(':person_red_hair: Test kecocokan menjadi artis')
                .setColor('#2c75db')
                .setDescription(`Mengscan lifestyle dari ${mention}...`)
                .setTimestamp();
    
                const embed3 = new discord.MessageEmbed()
                .setTitle(':person_red_hair: Test kecocokan menjadi artis')
                .setColor('#2bff00')
                .setDescription(`Mengumpulkan informasi berhasil! hasil akan di ungkapkan dalam 3...`)
                .setTimestamp();
    
                const embed4 = new discord.MessageEmbed()
                .setTitle(':person_red_hair: Test kecocokan menjadi artis')
                .setColor('#fffb00')
                .setDescription(`Mengumpulkan informasi berhasil! hasil akan di ungkapkan dalam 2...`)
                .setTimestamp();
    
                const embed5 = new discord.MessageEmbed()
                .setTitle(':person_red_hair: Test kecocokan menjadi artis')
                .setColor('#ff0000')
                .setDescription(`Mengumpulkan informasi berhasil! hasil akan di ungkapkan dalam 1...`)
                .setTimestamp();
    
                const embed6 = new discord.MessageEmbed()
                .setTitle(':person_red_hair: Test kecocokan menjadi artis')
                .setColor('#2c75db')
                .setDescription(`${mention} mencapai ${Math.floor(Math.random() * 101)}% cocok untuk menjadi artis!`)
                .setTimestamp();
    
                message.channel.send(embed).then((msg) => {
                    setTimeout(() => {
                        msg.edit(embed1).then((msg) => {
                            setTimeout(() => {
                              msg.edit(embed2).then((msg) => {
                                  setTimeout(() => {
                                    msg.edit(embed3).then((msg) => {
                                        setTimeout(() => {
                                            msg.edit(embed4).then((msg) => {
                                                setTimeout(() => {
                                                    msg.edit(embed5).then((msg) => {
                                                        setTimeout(() => {
                                                            msg.edit(embed6)
                                                        }, 1000);
                                                    })
                                                }, 1000);
                                            })
                                        }, 1000);
                                    })
                                  }, 1000);
                              })  
                            }, 1000);
                        })
                    }, 1000)
                })
            } else {
                 const embed = new discord.MessageEmbed()
                .setTitle(':person_red_hair: Test kecocokan menjadi artis')
                .setColor('#2c75db')
                .setDescription(`Mengscan Rambut, muka, mulut dari Anda...`)
                .setTimestamp();
    
                const embed1 = new discord.MessageEmbed()
                .setTitle(':person_red_hair: Test kecocokan menjadi artis')
                .setColor('#2c75db')
                .setDescription(`Mengscan Oprasi plastik dari Anda...`)
                .setTimestamp();
    
                const embed2 = new discord.MessageEmbed()
                .setTitle(':person_red_hair: Test kecocokan menjadi artis')
                .setColor('#2c75db')
                .setDescription(`Mengscan lifestyle dari Anda...`)
                .setTimestamp();
    
                const embed3 = new discord.MessageEmbed()
                .setTitle(':person_red_hair: Test kecocokan menjadi artis')
                .setColor('#2bff00')
                .setDescription(`Mengumpulkan informasi berhasil! hasil akan di ungkapkan dalam 3...`)
                .setTimestamp();
    
                const embed4 = new discord.MessageEmbed()
                .setTitle(':person_red_hair: Test kecocokan menjadi artis')
                .setColor('#fffb00')
                .setDescription(`Mengumpulkan informasi berhasil! hasil akan di ungkapkan dalam 2...`)
                .setTimestamp();
    
                const embed5 = new discord.MessageEmbed()
                .setTitle(':person_red_hair: Test kecocokan menjadi artis')
                .setColor('#ff0000')
                .setDescription(`Mengumpulkan informasi berhasil! hasil akan di ungkapkan dalam 1...`)
                .setTimestamp();
    
                const embed6 = new discord.MessageEmbed()
                .setTitle(':person_red_hair: Test kecocokan menjadi artis')
                .setColor('#2c75db')
                .setDescription(`Anda mencapai ${Math.floor(Math.random() * 101)}% kecocokan untuk menjadi artis!`)
                .setTimestamp();
    
                message.channel.send(embed).then((msg) => {
                    setTimeout(() => {
                        msg.edit(embed1).then((msg) => {
                            setTimeout(() => {
                              msg.edit(embed2).then((msg) => {
                                  setTimeout(() => {
                                    msg.edit(embed3).then((msg) => {
                                        setTimeout(() => {
                                            msg.edit(embed4).then((msg) => {
                                                setTimeout(() => {
                                                    msg.edit(embed5).then((msg) => {
                                                        setTimeout(() => {
                                                            msg.edit(embed6)
                                                        }, 1000);
                                                    })
                                                }, 1000);
                                            })
                                        }, 1000);
                                    })
                                  }, 1000);
                              })  
                            }, 1000);
                        })
                    }, 1000)
                })
            }
    }

    if(args[0] == '+tdoi'){
                 const embed = new discord.MessageEmbed()
                .setTitle(':heart: Test seberapa doi mencintaimu')
                .setColor('#2c75db')
                .setDescription(`Mengscan Hati doi anda...`)
                .setTimestamp();
    
                const embed1 = new discord.MessageEmbed()
                .setTitle(':heart: Test seberapa doi mencintaimu')
                .setColor('#2c75db')
                .setDescription(`Mengscan DM IG doi anda...`)
                .setTimestamp();
    
                const embed2 = new discord.MessageEmbed()
                .setTitle(':heart: Test seberapa doi mencintaimu')
                .setColor('#2c75db')
                .setDescription(`Mengscan Password IG doi anda...`)
                .setTimestamp();
    
                const embed3 = new discord.MessageEmbed()
                .setTitle(':heart: Test seberapa doi mencintaimu')
                .setColor('#2bff00')
                .setDescription(`Mengumpulkan informasi berhasil! hasil akan di ungkapkan dalam 3...`)
                .setTimestamp();
    
                const embed4 = new discord.MessageEmbed()
                .setTitle(':heart: Test seberapa doi mencintaimu')
                .setColor('#fffb00')
                .setDescription(`Mengumpulkan informasi berhasil! hasil akan di ungkapkan dalam 2...`)
                .setTimestamp();
    
                const embed5 = new discord.MessageEmbed()
                .setTitle(':heart: Test seberapa doi mencintaimu')
                .setColor('#ff0000')
                .setDescription(`Mengumpulkan informasi berhasil! hasil akan di ungkapkan dalam 1...`)
                .setTimestamp();
    
                const embed6 = new discord.MessageEmbed()
                .setTitle(':heart: Test seberapa doi mencintaimu')
                .setColor('#2c75db')
                .setDescription(`Doi anda mencintai anda ${Math.floor(Math.random() * 101)}%`)
                .setTimestamp();
    
                message.channel.send(embed).then((msg) => {
                    setTimeout(() => {
                        msg.edit(embed1).then((msg) => {
                            setTimeout(() => {
                              msg.edit(embed2).then((msg) => {
                                  setTimeout(() => {
                                    msg.edit(embed3).then((msg) => {
                                        setTimeout(() => {
                                            msg.edit(embed4).then((msg) => {
                                                setTimeout(() => {
                                                    msg.edit(embed5).then((msg) => {
                                                        setTimeout(() => {
                                                            msg.edit(embed6)
                                                        }, 1000);
                                                    })
                                                }, 1000);
                                            })
                                        }, 1000);
                                    })
                                  }, 1000);
                              })  
                            }, 1000);
                        })
                    }, 1000)
                })
            }

        if(args[0] == '+tlove'){
            let mention = message.mentions.members.first();

                if(mention){
                 const embed = new discord.MessageEmbed()
                 .setTitle(':sparkling_heart: Test seberapa cinta dia sama kamu')
                .setColor('#2c75db')
                .setDescription(`Mengscan isi hati luar ${mention}...`)
                .setTimestamp();
    
                const embed1 = new discord.MessageEmbed()
                .setTitle(':sparkling_heart: Test seberapa cinta dia sama kamu')
                .setColor('#2c75db')
                .setDescription(`Mengscan isi hati dalam ${mention}...`)
                .setTimestamp();
    
                const embed2 = new discord.MessageEmbed()
                .setTitle(':sparkling_heart: Test seberapa cinta dia sama kamu')
                .setColor('#2c75db')
                .setDescription(`Mengscan isi hati paling dalam ${mention}...`)
                .setTimestamp();
    
                const embed3 = new discord.MessageEmbed()
                .setTitle(':sparkling_heart: Test seberapa cinta dia sama kamu')
                .setColor('#2bff00')
                .setDescription(`Mengumpulkan informasi berhasil! hasil akan di ungkapkan dalam 3...`)
                .setTimestamp();
    
                const embed4 = new discord.MessageEmbed()
                .setTitle(':sparkling_heart: Test seberapa cinta dia sama kamu')
                .setColor('#fffb00')
                .setDescription(`Mengumpulkan informasi berhasil! hasil akan di ungkapkan dalam 2...`)
                .setTimestamp();
    
                const embed5 = new discord.MessageEmbed()
                .setTitle(':sparkling_heart: Test seberapa cinta dia sama kamu')
                .setColor('#ff0000')
                .setDescription(`Mengumpulkan informasi berhasil! hasil akan di ungkapkan dalam 1...`)
                .setTimestamp();
    
                const embed6 = new discord.MessageEmbed()
                .setTitle(':sparkling_heart: Test seberapa cinta dia sama kamu')
                .setColor('#2c75db')
                .setDescription(`${mention} mencintai anda ${Math.floor(Math.random() * 101)}% :sparkling_heart: `)
                .setTimestamp();
    
                message.channel.send(embed).then((msg) => {
                    setTimeout(() => {
                        msg.edit(embed1).then((msg) => {
                            setTimeout(() => {
                              msg.edit(embed2).then((msg) => {
                                  setTimeout(() => {
                                    msg.edit(embed3).then((msg) => {
                                        setTimeout(() => {
                                            msg.edit(embed4).then((msg) => {
                                                setTimeout(() => {
                                                    msg.edit(embed5).then((msg) => {
                                                        setTimeout(() => {
                                                            msg.edit(embed6)
                                                        }, 1000);
                                                    })
                                                }, 1000);
                                            })
                                        }, 1000);
                                    })
                                  }, 1000);
                              })  
                            }, 1000);
                        })
                    }, 1000)
                })
            } else {
                message.channel.send('Mau ngetest siapa sih? hah')
                }
            }

            if(args[0] == '+tpikiran'){
            let mention = message.mentions.members.first();

            let jawaban = ["Saudara nya", "Sepupu nya", "Orang Tua nya", "Masa depan nya", "Istri nya", "Blank", "Mikirin apa yoo", "Kematian", "Kenapa bebek kaki nya 2"];
    
            if(mention.user.bot) return message.channel.send('Buset dah disuruh cek otak robot.')

            if(mention){
                const embed = new discord.MessageEmbed()
                .setTitle(':brain: Test pikiran seseorang')
                .setColor('#2c75db')
                .setDescription(`Mencari tau informasi tentang ${mention}...`)
                .setTimestamp();
    
                const embed1 = new discord.MessageEmbed()
                .setTitle(':brain: Test pikiran seseorang')
                .setColor('#2c75db')
                .setDescription(`Membocorkan rahasia tentang ${mention}...`)
                .setTimestamp();
    
                const embed2 = new discord.MessageEmbed()
                .setTitle(':brain: Test pikiran seseorang')
                .setColor('#2c75db')
                .setDescription(`Mengambil bagian otak dari ${mention}...`)
                .setTimestamp();
    
                const embed3 = new discord.MessageEmbed()
                .setTitle(':brain: Test pikiran seseorang')
                .setColor('#2bff00')
                .setDescription(`Mengumpulkan informasi berhasil! hasil akan di ungkapkan dalam 3...`)
                .setTimestamp();
    
                const embed4 = new discord.MessageEmbed()
                .setTitle(':brain: Test pikiran seseorang')
                .setColor('#fffb00')
                .setDescription(`Mengumpulkan informasi berhasil! hasil akan di ungkapkan dalam 2...`)
                .setTimestamp();
    
                const embed5 = new discord.MessageEmbed()
                .setTitle(':brain: Test pikiran seseorang')
                .setColor('#ff0000')
                .setDescription(`Mengumpulkan informasi berhasil! hasil akan di ungkapkan dalam 1...`)
                .setTimestamp();
    
                const embed6 = new discord.MessageEmbed()
                .setTitle(':brain: Test pikiran seseorang')
                .setColor('#2c75db')
                .setDescription(`${mention} sedang memikirkan **${jawaban[Math.floor(Math.random() * jawaban.length)]}**`)
                .setTimestamp();
    
                message.channel.send(embed).then((msg) => {
                    setTimeout(() => {
                        msg.edit(embed1).then((msg) => {
                            setTimeout(() => {
                              msg.edit(embed2).then((msg) => {
                                  setTimeout(() => {
                                    msg.edit(embed3).then((msg) => {
                                        setTimeout(() => {
                                            msg.edit(embed4).then((msg) => {
                                                setTimeout(() => {
                                                    msg.edit(embed5).then((msg) => {
                                                        setTimeout(() => {
                                                            msg.edit(embed6)
                                                        }, 1000);
                                                    })
                                                }, 1000);
                                            })
                                        }, 1000);
                                    })
                                  }, 1000);
                              })  
                            }, 1000);
                        })
                    }, 1000)
                })
            } else {
                message.channel.send("Kamu gk bisa memikirkan apa yang kamu pikirkan sehingga aku harus mikirkan apa yang kamu pikirkan?")    
            }
    }
})

client.login('Nzk1NDc5MDI3Mzk3ODIwNDI3.X_J9kw.lAdmv-IaPtQ9oJxg57NrolNozAc')