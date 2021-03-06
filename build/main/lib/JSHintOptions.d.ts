export interface JSHintOptions {
    bitwise?: boolean;
    /**
     * deprecated
     */
    camelcase?: boolean;
    curly?: boolean;
    /**
     * deprecated
     */
    enforceall?: boolean;
    eqeqeq?: boolean;
    /**
     * deprecated
     */
    es3?: boolean;
    /**
     * deprecated
     */
    es5?: boolean;
    esversion?: number;
    forin?: boolean;
    freeze?: boolean;
    funcscope?: boolean;
    futurehostile?: boolean;
    globals?: string[];
    /**
     * deprecated
     */
    immed?: boolean;
    /**
     * deprecated
     */
    indent?: number;
    iterator?: boolean;
    latedef?: boolean | string;
    maxcomplexity?: number;
    maxdepth?: number;
    maxerr?: number;
    /**
     * deprecated
     */
    maxlen?: number;
    maxparams?: boolean;
    maxstatements?: number;
    /**
     * deprecated
     */
    newcap?: boolean;
    noarg?: boolean;
    nocomma?: boolean;
    /**
     * deprecated
     */
    noempty?: boolean;
    /**
     *
     */
    nonbsp?: boolean;
    nonew?: boolean;
    notypeof?: boolean;
    predef?: string[];
    /**
     * deprecated
     */
    quotmark?: boolean | string;
    /**
     *
     */
    shadow?: boolean | string;
    singleGroups?: boolean;
    /**
     *
     */
    strict?: string | boolean;
    undef?: boolean;
    unused?: boolean;
    varstmt?: boolean;
    ignoreDelimiters?: any;
    onevar?: boolean;
    passfail?: boolean;
    exported?: {
        [name: string]: boolean;
    };
    scope?: string;
    asi?: boolean;
    boss?: boolean;
    debug?: boolean;
    elision?: boolean;
    eqnull?: boolean;
    esnext?: boolean;
    evil?: boolean;
    expr?: boolean;
    globalstrict?: boolean;
    lastsemic?: boolean;
    /**
     * deprecated
     */
    laxbreak?: boolean;
    /**
     * deprecated
     */
    laxcomma?: boolean;
    loopfunc?: boolean;
    moz?: boolean;
    /**
     * deprecated
     */
    multistr?: boolean;
    noyield?: boolean;
    plusplus?: boolean;
    proto?: boolean;
    scripturl?: boolean;
    /**
     * deprecated
     */
    sub?: boolean;
    supernew?: boolean;
    validthis?: boolean;
    withstmt?: boolean;
    /**
     *
     */
    browser?: boolean;
    browserify?: boolean;
    couch?: boolean;
    /**
     * Defines console, alert, etc.
     */
    devel?: boolean;
    dojo?: boolean;
    jasmine?: boolean;
    jquery?: boolean;
    mocha?: boolean;
    module?: boolean;
    mootools?: boolean;
    node?: boolean;
    nonstandard?: boolean;
    phantom?: boolean;
    prototypejs?: boolean;
    qunit?: boolean;
    rhino?: boolean;
    shelljs?: boolean;
    typed?: boolean;
    worker?: boolean;
    wsh?: boolean;
    yui?: boolean;
}
