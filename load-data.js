var buttons = {
    saveAsPDF: function () {
        var fileURL = './KamilMielnik.pdf';
        window.open(fileURL);
    },
    print: function () {
        window.print();
    }
};

ko.applyBindings({
    buttons: buttons,
    name: 'Kamil Mielnik',
    contactInfo: [
        {
            label: 'Location',
            value: 'Kraków, Poland',
            url: false
        },
        {
            label: 'Phone',
            value: '+48 792 376 353',
            url: false
        },
        {
            label: 'Email',
            value: 'kamil.adam.mielnik@gmail.com',
            url: 'mailto:kamil.adam.mielnik@gmail.com'
        },
        {
            label: 'Website',
            value: 'http://kamilmielnik.pl',
            url: 'http://kamilmielnik.pl'
        },
        {
            label: 'LinkedIn',
            value: 'https://linkedin.com/in/kamilmielnik',
            url: 'https://linkedin.com/in/kamilmielnik'
        }
    ],
    experience: [
        {
            type: 'Work Experience',
            entries: [
                {
                    organization: 'Codete',
                    location: 'Kraków, Poland',
                    timePeriod: '2015 - present',
                    description: 'JavaScript, React, RefluxJS, RequireJS, D3.js, Moment.js, Underscore.js, jQuery, Bootstrap, HTML, LESS, webpack, npm, Grunt, JIRA, Brackets, Atom, Mercurial',
                    positions: [
                        {
                            title: 'JavaScript Developer',
                            now: true,
                            timePeriods: [
                                {
                                    start: moment('2015/08/01', 'YYYY-MM-DD'),
                                    end: moment()
                                }
                            ]
                        }
                    ]
                },
                {
                    organization: 'Pega',
                    location: 'Kraków, Poland',
                    timePeriod: '2014 - 2015',
                    description: 'JavaScript, Knockout.js, Knockback.js, Backbone.js, RequireJS, Moment.js, Underscore.js, jQuery, HTML, LESS, npm, Grunt, Gerrit, JIRA, Brackets, Microsoft Visual Studio, Git',
                    positions: [
                        {
                            title: 'System Architect - Mobility',
                            timePeriods: [
                                {
                                    start: moment('2015/07/01', 'YYYY-MM-DD'),
                                    end: moment('2015/07/31', 'YYYY-MM-DD')
                                }
                            ]
                        },
                        {
                            title: 'Associate System Architect - Mobility',
                            timePeriods: [
                                {
                                    start: moment('2014/07/01', 'YYYY-MM-DD'),
                                    end: moment('2015/06/30', 'YYYY-MM-DD')
                                }
                            ]
                        }
                    ]
                },
                {
                    organization: 'CERN',
                    location: 'Genève, Switzerland',
                    timePeriod: '2013 - 2014',
                    description: 'Java, Vaadin, ZeroC Ice, CASTOR, SASS, Assembla, Eclipse, SVN',
                    positions: [
                        {
                            title: 'Associated Member of the Personnel (User)',
                            timePeriods: [
                                {
                                    start: moment('2013/10/01', 'YYYY-MM-DD'),
                                    end: moment('2014/01/31', 'YYYY-MM-DD')
                                }
                            ]
                        },
                        {
                            title: 'Associated Member of the Personnel (Cooperation Associate)',
                            timePeriods: [
                                {
                                    start: moment('2013/07/01', 'YYYY-MM-DD'),
                                    end: moment('2013/09/30', 'YYYY-MM-DD')
                                }
                            ]
                        }
                    ]
                },
                {
                    organization: 'Comarch',
                    location: 'Kraków, Poland',
                    timePeriod: '2012 - 2013, 2014',
                    description: 'TypeScript, JavaScript, jQuery, Bootstrap, HTML, CSS, PHP, Zend Framework, Doctrine, PostgreSQL, C#, Windows Presentation Foundation, Microsoft Visual Studio, NetBeans, PhpStorm, Git',
                    positions: [
                        {
                            title: 'Software Engineer',
                            timePeriods: [
                                {
                                    start: moment('2012/10/01', 'YYYY-MM-DD'),
                                    end: moment('2013/03/31', 'YYYY-MM-DD')
                                },
                                {
                                    start: moment('2014/02/07', 'YYYY-MM-DD'),
                                    end: moment('2014/06/30', 'YYYY-MM-DD')
                                }
                            ]
                        },
                        {
                            title: 'Software Engineer - Internship',
                            timePeriods: [
                                {
                                    start: moment('2012/07/01', 'YYYY-MM-DD'),
                                    end: moment('2012/09/30', 'YYYY-MM-DD')
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            type: 'Education',
            entries: [
                {
                    organization: 'AGH UST',
                    location: 'Kraków, Poland',
                    timePeriod: '2010 - 2015',
                    description: 'The Faculty of Computer Science, Electronics and Telecommunications',
                    positions: [
                        {
                            title: 'Master of Science in Computer Science',
                            timePeriod: '1.5 yr',
                            timePeriods: [
                                {
                                    start: moment('2014/03/01', 'YYYY-MM-DD'),
                                    end: moment('2015/07/22', 'YYYY-MM-DD')
                                }
                            ]
                        },
                        {
                            title: 'Bachelor of Science in Computer Science',
                            timePeriod: '3.5 yr',
                            timePeriods: [
                                {
                                    start: moment('2010/10/01', 'YYYY-MM-DD'),
                                    end: moment('2014/02/28', 'YYYY-MM-DD')
                                }
                            ]
                        }
                    ]
                },
            ],
        }
    ],
    skills: 'Object-Oriented Programming, Clean Code, Design Patterns, Refactoring, Code Review'
        /*,
            traits: 'Consistent, Meticulous, Patient, Pedantic, Perceptive, Perfectionistic, Punctilious'*/
});

function stringFormat(string, args) {
    var formatted = string,
        name,
        value;

    for (name in args) {
        if (args.hasOwnProperty(name)) {
            value = args[name];
            formatted = formatted.replace(new RegExp('\\{' + name + '\\}', 'gi'), value);
        }
    }
    return formatted;
}

function isMailOrUrl(value) {
    var urlPrefix = 'http://',
        isUrl = value.substring(0, urlPrefix.lengh) === urlPrefix,
        isMail = value.indexOf('@') > 0;
    return isMail || isUrl;
}

function timeSpentAtPosition(position) {
    var numberOfMonths = numberOfMonthsAtPosition(position),
        years = Math.floor(numberOfMonths / 12),
        months = numberOfMonths - years * 12;

    if (years === 0) {
        return stringFormat('{months} mo', {
            months: months
        });
    }

    if (months === 0) {
        return stringFormat('{years} yr', {
            years: years
        });
    }

    if (months === 6) {
        return stringFormat('{years}.5 yr', {
            years: years
        });
    }

    return stringFormat('{years} yr {months} mo', {
        years: years,
        months: months
    });
}

function numberOfMonthsAtPosition(position) {
    var timePeriods = position.timePeriods,
        numberOfMonths = 0,
        timePeriod,
        i;

    for (i = 0; i < timePeriods.length; ++i) {
        timePeriod = timePeriods[i];
        numberOfMonths += monthDifference(timePeriod.start, timePeriod.end);
    }

    return numberOfMonths;
}

function monthDifference(startDate, endDate) {
    return Math.ceil(endDate.diff(startDate, 'months', true));
}
