dependencies {
    implementation("global.genesis:genesis-pal-execution")
    compileOnly("global.genesis:genesis-dictionary")
    api("global.genesis:genesis-pal-dataserver")
    api("global.genesis:genesis-pal-requestserver")
    api("global.genesis:genesis-pal-streamer")
    api("global.genesis:genesis-pal-streamerclient")
    api("global.genesis:genesis-pal-eventhandler")
    api("global.genesis:genesis-pal-consolidator")
    compileOnly(project(path = ":alpha-dictionary-cache", configuration = "codeGen"))
    testCompileOnly(project(":alpha-config"))
    testImplementation("global.genesis:genesis-dbtest")
    testImplementation("global.genesis:genesis-testsupport")
    testImplementation(project(path = ":alpha-dictionary-cache", configuration = "codeGen"))
    api(project(":alpha-eventhandler"))
    api(project(":alpha-messages"))
}

description = "alpha-script-config"
