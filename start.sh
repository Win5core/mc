java -Xmx5700M -XX:+UseG1GC -Dsun.rmi.dgc.server.gcInterval=2147483646  -XX:+UnlockExperimentalVMOptions -XX:G1NewSizePercent=20  -XX:G1ReservePercent=20 -XX:MaxGCPauseMillis=51 -XX:G1HeapRegionSize=32M -jar fabric-server-mc.1.20.2-loader.0.14.24-launcher.0.11.2.jar nogui
