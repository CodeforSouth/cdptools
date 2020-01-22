Search.setIndex({docnames:["cdptools","cdptools.audio_splitters","cdptools.bin","cdptools.databases","cdptools.dev_utils","cdptools.event_scrapers","cdptools.file_stores","cdptools.indexers","cdptools.legistar_utils","cdptools.pipelines","cdptools.research_utils","cdptools.sr_models","contributing","deployment_instructions","index","installation","modules","resources/dbdiagramio_raw","system_design","transcript_formats"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["cdptools.rst","cdptools.audio_splitters.rst","cdptools.bin.rst","cdptools.databases.rst","cdptools.dev_utils.rst","cdptools.event_scrapers.rst","cdptools.file_stores.rst","cdptools.indexers.rst","cdptools.legistar_utils.rst","cdptools.pipelines.rst","cdptools.research_utils.rst","cdptools.sr_models.rst","contributing.rst","deployment_instructions.rst","index.rst","installation.rst","modules.rst","resources/dbdiagramio_raw.txt","system_design.rst","transcript_formats.rst"],objects:{"":{cdptools:[0,0,0,"-"]},"cdptools.audio_splitters":{audio_splitter:[1,0,0,"-"],ffmpeg_audio_splitter:[1,0,0,"-"]},"cdptools.audio_splitters.audio_splitter":{AudioSplitter:[1,1,1,""]},"cdptools.audio_splitters.audio_splitter.AudioSplitter":{split:[1,2,1,""]},"cdptools.audio_splitters.ffmpeg_audio_splitter":{FFmpegAudioSplitter:[1,1,1,""]},"cdptools.audio_splitters.ffmpeg_audio_splitter.FFmpegAudioSplitter":{split:[1,2,1,""]},"cdptools.bin":{process_single_event:[2,0,0,"-"],run_cdp_pipeline:[2,0,0,"-"]},"cdptools.bin.process_single_event":{Args:[2,1,1,""],main:[2,3,1,""]},"cdptools.bin.run_cdp_pipeline":{Args:[2,1,1,""],main:[2,3,1,""],run_cdp_pipeline:[2,3,1,""]},"cdptools.cdp_instance":{CDPInstance:[0,1,1,""],CDPInstanceConfig:[0,1,1,""]},"cdptools.cdp_instance.CDPInstance":{database:[0,2,1,""],download_transcripts:[0,2,1,""],file_store:[0,2,1,""],get_transcript_manifest:[0,2,1,""]},"cdptools.databases":{database:[3,0,0,"-"],exceptions:[3,0,0,"-"]},"cdptools.databases.database":{Database:[3,1,1,""],Match:[3,1,1,""],OrderCondition:[3,1,1,""],OrderOperators:[3,1,1,""],TermResult:[3,1,1,""],WhereCondition:[3,1,1,""],WhereOperators:[3,1,1,""]},"cdptools.databases.database.Database":{get_event:[3,2,1,""],get_indexed_event_term:[3,2,1,""],get_indexed_minutes_item_term:[3,2,1,""],get_or_upload_algorithm:[3,2,1,""],get_or_upload_body:[3,2,1,""],get_or_upload_event:[3,2,1,""],get_or_upload_event_entity:[3,2,1,""],get_or_upload_event_minutes_item:[3,2,1,""],get_or_upload_event_topic:[3,2,1,""],get_or_upload_file:[3,2,1,""],get_or_upload_minutes_item:[3,2,1,""],get_or_upload_minutes_item_file:[3,2,1,""],get_or_upload_person:[3,2,1,""],get_or_upload_run:[3,2,1,""],get_or_upload_run_input:[3,2,1,""],get_or_upload_run_input_file:[3,2,1,""],get_or_upload_run_output:[3,2,1,""],get_or_upload_run_output_file:[3,2,1,""],get_or_upload_transcript:[3,2,1,""],get_or_upload_vote:[3,2,1,""],search_events:[3,2,1,""],search_minutes_items:[3,2,1,""],select_row_by_id:[3,2,1,""],select_rows_as_list:[3,2,1,""],tables:[3,2,1,""],upload_or_update_indexed_event_term:[3,2,1,""],upload_or_update_indexed_minutes_item_term:[3,2,1,""],wipe_table:[3,2,1,""]},"cdptools.databases.database.Match":{data:[3,2,1,""],relevance:[3,2,1,""],terms:[3,2,1,""],unique_id:[3,2,1,""]},"cdptools.databases.database.OrderCondition":{column_name:[3,2,1,""],operator:[3,2,1,""]},"cdptools.databases.database.OrderOperators":{asce:[3,4,1,""],desc:[3,4,1,""]},"cdptools.databases.database.TermResult":{contribution:[3,2,1,""],term:[3,2,1,""]},"cdptools.databases.database.WhereCondition":{column_name:[3,2,1,""],operator:[3,2,1,""],value:[3,2,1,""]},"cdptools.databases.database.WhereOperators":{contains:[3,4,1,""],eq:[3,4,1,""],gt:[3,4,1,""],gteq:[3,4,1,""],lt:[3,4,1,""],lteq:[3,4,1,""]},"cdptools.databases.exceptions":{FailedRequestError:[3,5,1,""],MissingCredentialsError:[3,5,1,""],MissingParameterError:[3,5,1,""],UniquenessError:[3,5,1,""],UnknownTypeOrderConditionError:[3,5,1,""],UnknownTypeWhereConditionError:[3,5,1,""],UnstructuredOrderConditionError:[3,5,1,""],UnstructuredWhereConditionError:[3,5,1,""]},"cdptools.dev_utils":{load_custom_object:[4,0,0,"-"],run_manager:[4,0,0,"-"]},"cdptools.dev_utils.load_custom_object":{load_custom_object:[4,3,1,""]},"cdptools.dev_utils.run_manager":{RunIO:[4,1,1,""],RunManager:[4,1,1,""]},"cdptools.dev_utils.run_manager.RunIO":{type:[4,2,1,""],value:[4,2,1,""]},"cdptools.dev_utils.run_manager.RunManager":{register_input:[4,2,1,""],register_output:[4,2,1,""],register_run:[4,2,1,""]},"cdptools.event_scrapers":{event_scraper:[5,0,0,"-"],exceptions:[5,0,0,"-"],seattle_event_scraper:[5,0,0,"-"]},"cdptools.event_scrapers.event_scraper":{EventScraper:[5,1,1,""]},"cdptools.event_scrapers.event_scraper.EventScraper":{get_events:[5,2,1,""],get_single_event:[5,2,1,""]},"cdptools.event_scrapers.exceptions":{EventOutOfTimeboundsError:[5,5,1,""],EventParseError:[5,5,1,""],LegistarLookupError:[5,5,1,""]},"cdptools.event_scrapers.seattle_event_scraper":{ParsedEvents:[5,1,1,""],SeattleEventScraper:[5,1,1,""]},"cdptools.event_scrapers.seattle_event_scraper.SeattleEventScraper":{get_events:[5,2,1,""],get_routes:[5,2,1,""],get_single_event:[5,2,1,""],pstnow:[5,2,1,""]},"cdptools.file_stores":{exceptions:[6,0,0,"-"],file_store:[6,0,0,"-"]},"cdptools.file_stores.exceptions":{MissingCredentialsError:[6,5,1,""]},"cdptools.file_stores.file_store":{FileStore:[6,1,1,""]},"cdptools.file_stores.file_store.FileStore":{compute_sha256_for_file:[6,2,1,""],download_file:[6,2,1,""],get_file_uri:[6,2,1,""],upload_file:[6,2,1,""]},"cdptools.indexers":{exceptions:[7,0,0,"-"],indexer:[7,0,0,"-"],tfidf_indexer:[7,0,0,"-"]},"cdptools.indexers.exceptions":{UnrecognizedTranscriptFormatError:[7,5,1,""]},"cdptools.indexers.indexer":{Indexer:[7,1,1,""]},"cdptools.indexers.indexer.Indexer":{clean_text_for_indexing:[7,2,1,""],drop_terms_from_index_below_value:[7,2,1,""],generate_index:[7,2,1,""],get_raw_transcript:[7,2,1,""]},"cdptools.indexers.tfidf_indexer":{DocumentDetails:[7,1,1,""],TFIDFIndexer:[7,1,1,""]},"cdptools.indexers.tfidf_indexer.DocumentDetails":{path:[7,2,1,""],unique_id:[7,2,1,""]},"cdptools.indexers.tfidf_indexer.TFIDFIndexer":{generate_index:[7,2,1,""]},"cdptools.legistar_utils":{events:[8,0,0,"-"]},"cdptools.legistar_utils.events":{AgendaMatchResults:[8,1,1,""],get_legistar_events_for_timespan:[8,3,1,""],get_matching_legistar_event_by_minutes_match:[8,3,1,""],parse_legistar_event_details:[8,3,1,""]},"cdptools.pipelines":{event_gather_pipeline:[9,0,0,"-"],event_index_pipeline:[9,0,0,"-"],minutes_item_index_pipeline:[9,0,0,"-"],pipeline:[9,0,0,"-"]},"cdptools.pipelines.event_gather_pipeline":{EventGatherPipeline:[9,1,1,""]},"cdptools.pipelines.event_gather_pipeline.EventGatherPipeline":{process_event:[9,2,1,""],run:[9,2,1,""],task_audio_get_or_copy:[9,2,1,""],task_parse_and_upload_constructed_event:[9,2,1,""],task_transcript_get_or_create:[9,2,1,""]},"cdptools.pipelines.event_index_pipeline":{EventIndexPipeline:[9,1,1,""]},"cdptools.pipelines.event_index_pipeline.EventIndexPipeline":{run:[9,2,1,""],task_clean_index:[9,2,1,""],task_generate_index:[9,2,1,""],task_upload_index:[9,2,1,""]},"cdptools.pipelines.minutes_item_index_pipeline":{MinutesItemIndexPipeline:[9,1,1,""]},"cdptools.pipelines.minutes_item_index_pipeline.MinutesItemIndexPipeline":{run:[9,2,1,""],task_clean_index:[9,2,1,""],task_generate_corpus:[9,2,1,""],task_generate_index:[9,2,1,""],task_upload_index:[9,2,1,""]},"cdptools.pipelines.pipeline":{Pipeline:[9,1,1,""],ValuesForTerm:[9,1,1,""]},"cdptools.pipelines.pipeline.Pipeline":{run:[9,2,1,""]},"cdptools.research_utils":{transcripts:[10,0,0,"-"]},"cdptools.research_utils.transcripts":{TrancriptJoin:[10,1,1,""],download_transcripts:[10,3,1,""],get_transcript_manifest:[10,3,1,""]},"cdptools.research_utils.transcripts.TrancriptJoin":{event_id:[10,2,1,""],transcript_details:[10,2,1,""]},"cdptools.sr_models":{constants:[11,0,0,"-"],sr_model:[11,0,0,"-"],webvtt_sr_model:[11,0,0,"-"]},"cdptools.sr_models.constants":{TranscriptFormats:[11,1,1,""]},"cdptools.sr_models.constants.TranscriptFormats":{raw:[11,4,1,""],timestamped_sentences:[11,4,1,""],timestamped_speaker_turns:[11,4,1,""],timestamped_words:[11,4,1,""]},"cdptools.sr_models.sr_model":{SRModel:[11,1,1,""],SRModelOutputs:[11,1,1,""]},"cdptools.sr_models.sr_model.SRModel":{transcribe:[11,2,1,""],wrap_and_format_transcript_data:[11,2,1,""]},"cdptools.sr_models.sr_model.SRModelOutputs":{confidence:[11,2,1,""],extras:[11,2,1,""],raw_path:[11,2,1,""],timestamped_sentences_path:[11,2,1,""],timestamped_speaker_turns_path:[11,2,1,""],timestamped_words_path:[11,2,1,""]},"cdptools.sr_models.webvtt_sr_model":{WebVTTSRModel:[11,1,1,""]},"cdptools.sr_models.webvtt_sr_model.WebVTTSRModel":{transcribe:[11,2,1,""]},cdptools:{audio_splitters:[1,0,0,"-"],bin:[2,0,0,"-"],cdp_instance:[0,0,0,"-"],configs:[0,0,0,"-"],databases:[3,0,0,"-"],dev_utils:[4,0,0,"-"],event_scrapers:[5,0,0,"-"],file_stores:[6,0,0,"-"],get_module_version:[0,3,1,""],indexers:[7,0,0,"-"],legistar_utils:[8,0,0,"-"],pipelines:[9,0,0,"-"],research_utils:[10,0,0,"-"],sr_models:[11,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute","5":"py:exception"},terms:{"0123abc":14,"15ce0a20":7,"24f6e8d12ad9":7,"3571c871":7,"41b5":7,"4567def":14,"4d42":14,"4ebd":7,"6f7d":7,"85d1":7,"95eafcfa03c5":14,"9ad3":14,"abstract":[1,3,5,6,7,9,11,18],"boolean":[4,6],"byte":[6,18],"case":[4,7,8,13,18],"catch":4,"class":[0,1,2,3,4,5,6,7,8,9,10,11,18],"default":[0,3,4,10,13,18,19],"final":[14,18],"float":[3,7,9,11,17],"function":[1,5,7,8,11,14,18],"import":14,"int":[3,5,6,7],"long":[13,18],"new":[3,4,7,10,11,13,18],"null":17,"public":[13,15],"return":[0,1,3,4,5,6,7,8,9,10,11,14,18,19],"short":[12,18],"static":[5,6,7,11],"true":13,"try":18,"while":[7,13,14,18],AND:13,AWS:13,And:18,Being:18,For:[8,13,14,18],One:[11,13],That:[13,18],The:[3,4,6,7,8,11,13,14,15,18,19],Then:12,There:[13,18],These:[13,18,19],Use:[3,14],Used:[3,8,9],With:13,_create_io:4,_tabl:3,abc:[1,3,5,6,7,9,11],abl:13,about:[3,4,11,13,18],abov:[5,13,15],accept:18,access:[3,13,14,18],account:13,accur:11,accuraci:11,across:[13,18],act:[0,7,10,11],action:14,activ:18,actual:[13,18],acycl:18,add:[3,6,12,13],added:8,adding:4,addit:[1,13,14],addition:[0,4,8,10],address:13,adjust:13,adopt:3,after:[4,6,8,13],again:[13,19],against:7,agenda:[3,8],agenda_file_uri:[3,17],agendamatchresult:8,agre:13,aim:[14,18],aka:13,algorithm:[3,4,6,8,17,18],algorithm_descript:4,algorithm_id:[3,17],algorithm_nam:4,algorithm_sourc:4,algorithm_vers:4,alia:[3,4,7,10,11],all:[3,4,7,8,11,12,13,15,18,19],all_ev:14,allow:[7,13,14,18],allpath:13,allus:13,alreadi:[0,3,4,5,6,10,13,18],also:[3,12,13,14,18],although:13,alwai:[0,10,12,15,18,19],america:13,anaconda:12,analysi:18,ani:[0,3,4,5,7,8,9,11,13,18,19],annot:[7,11,19],anoth:18,anyth:[13,18],anywher:13,apach:18,api:[13,18],app:13,app_dirs_file_stor:[0,16],appdirsfilestor:18,appear:13,applaud:13,appoint:[3,14],appreci:12,appt:3,arg:2,argpars:2,argument:[1,7,18],around:18,arriv:18,artif:7,asc:3,ascend:3,ask:18,associ:3,assum:[13,18],attach:[8,13],attempt:[7,18],attribut:[8,11,14],audio:[1,7,9,11,13,14],audio_save_path:1,audio_splitt:[0,16],audiosplitt:1,autom:14,avail:[0,1,3,4,10,11,13,14,18,19],awai:13,azur:13,back:18,backend:[1,14],backfil:[5,13],bar:13,barrier:14,base:[0,1,2,3,4,5,6,7,8,9,10,11,18],bash:13,basic:[7,14,15,18,19],basics_of_http:3,be1d:14,becaus:[3,9,13,18,19],been:[5,18],befor:[3,8,13],begin:[3,4,5,8,17],being:[8,14,18],believ:5,belong:19,below:[14,18],benefit:13,best:[5,13,18,19],between:[8,13,19],bf3f:7,bicycl:14,biggest:13,bill:[13,14],bin:[0,16],bit:[12,18],block:19,block_siz:6,bodi:[0,3,5,10,14,17],body_id:[3,17],bool:[1,4,5,6,8],both:[13,18],box:13,branch:12,brief:13,broadcast:18,broken:13,bruce:3,bsd:14,bucket:13,bucket_nam:13,bugfix:12,build:[12,13,18],built:[13,18],bumpvers:12,button:13,cake:18,call:[8,13,18],can:[0,1,3,4,5,7,8,9,10,12,13,14,15,18,19],caption:[11,18],caption_uri:9,card:13,carri:18,cast:3,cdp:[0,3,7,8,10,14,15,18,19],cdp_instanc:16,cdpinstanc:[0,14],cdpinstanceconfig:0,cdptool:[12,13,15,18],ced0589f9220:7,center:13,central:13,certain:7,chanc:18,chang:[12,13],check:[8,12],checkout:12,choic:[0,10,14,18],choos:[13,18,19],circl:18,citi:[3,8,13,15,18],citycouncil:5,civic:13,claus:14,clean:[4,7,9],clean_text_for_index:7,cleaned_index:7,cleaned_transcript:7,click:13,client:8,clip:1,clone:[12,13,15],clone_db:[0,16],close:[13,18],closest:8,cloud:[13,18],cloud_firestore_databas:[0,16],cluster:18,coast:13,code:[13,14,18],collabor:18,collect:14,column_nam:3,com:[12,13,14,15],combin:14,come:[8,13,18],command:[13,15],comment:13,commit:12,committe:14,common:8,commonli:[3,13,18],compar:[7,18],complet:[3,4,6,9,17,18],complex:18,compon:[13,18],comput:[6,7,14,18],compute_sha256_for_fil:6,condit:3,confid:[0,3,10,11,14,17,18,19],config:[13,14,16],config_path:9,configur:18,connect:[4,10,13,14],consid:5,consist:18,consol:13,constant:[0,16],constrant:7,construct:4,contain:[3,5,7,8,13,14,18],content:16,content_typ:[3,17],context:4,continu:13,contribut:[3,14,18],convert:4,cookiecutt:14,copi:[9,13,15],cor:13,core:[0,10,13,18,19],corner:13,corpu:[7,9,18],cost:[13,14],costli:13,could:[1,18],council:[3,14,18],councildataproject:[13,14,15],coupl:13,cptool:4,cpu:13,creat:[0,3,4,7,9,10,11,12,13,14,17,19],creation:[4,14],credenti:[3,4,13],credentials_path:13,credit:12,csv:[0,10],curl:15,current:[0,5,6,10,13,19],custom:[4,18,19],customiz:[14,18],dag:18,dai:13,dashboard:13,data:[3,4,7,8,11,13,14,18,19],databas:[0,4,7,10,13,14,16],database_module_path:0,database_object_kwarg:0,database_object_nam:0,datafram:[0,10],date:13,datetim:[3,5,8,14,17],deal:3,debat:18,decid:13,decis:[3,9,17],dedic:18,defacto:18,defin:[3,18],delet:3,deliv:18,depend:[4,13,15],deploi:[3,14,18],deploy:[13,18],desc:3,descend:3,describ:13,descript:[3,4,12,17],design:[13,14],destin:6,detail:[0,3,4,5,8,10,11,12,13],determin:[8,13],dev:[12,18],dev_util:[0,16],develop:[3,4,7,12,18,19],diagram:18,dicitonari:5,dict:[0,3,4,5,7,8,9,10,11],dictat:18,dictionari:[0,3,5,7,8,9,10,11,14,19],differ:[8,13,15,18,19],digest:6,direct:18,directori:[0,10,13,14],discourag:13,discover:[14,18],discoveri:18,discuss:[3,13,14,18],displai:8,doc:3,docker:[13,14,18],document:[13,18],document_corpus_map:7,documentdetail:7,doe:[7,18],doesn:[13,18],don:[15,18],done:[7,12,13],doubl:3,down:[3,13,18],download:[0,6,10,13,14,15],download_fil:6,download_transcript:[0,10,14],downstream:[3,13,18,19],drop:[7,8],drop_terms_from_index_below_valu:7,dropdown:13,dtype:[3,17],dump:[11,19],dure:[3,4,5,8,13],e28e4954f626:13,each:[0,3,4,5,8,10,13,14,15,18,19],earlier:13,eas:18,easi:[13,14,18],easier:14,easiest:13,easili:18,east:13,edit:[12,13],editor:13,effici:18,either:[3,7,13,15],element:19,els:[13,18],email:[3,17],empti:[3,19],enabl:13,encompass:13,end:[5,8,18],end_tim:19,endpoint:18,engin:13,enhanc:19,enough:18,ensur:[13,14],enter:13,entir:[1,13,14,18,19],entiti:3,environ:12,equal:7,error:[4,5],etc:[3,13],event:[0,3,5,7,9,10,13,14,16,17,19],event_corpus_map:[0,7,9,10,14],event_datetim:[3,14,17],event_gather_pipelin:[0,16],event_id:[3,10,14,17],event_index_pipelin:[0,16],event_minutes_item:[3,17],event_minutes_item_id:[3,17],event_scrap:[0,16,18],eventgatherpipelin:[5,9,13,19],eventid:3,eventindexpipelin:[9,13],eventitem:8,eventitemid:3,eventoutoftimeboundserror:5,eventparseerror:5,eventscrap:[5,13],ever:18,everi:[7,12,13],everyth:14,exact:13,exampl:[1,7,8,13,14,18],example_event_pipeline_config_with_mixture_sr_model:18,except:[0,13,16],exist:[0,6,10],expans:19,expect:18,explain:19,extra:[11,18],extrem:18,facilit:19,factor:18,failedrequesterror:3,fairli:8,fals:[1,4,5,6,8],far:[13,18],fast:13,fastest:13,fear:18,featur:12,feel:[13,18],few:18,ffmpeg:18,ffmpeg_audio_splitt:[0,16],ffmpegaudiosplitt:[1,13],field:[0,3,4,7,10,11],fifteen:13,file:[0,1,3,4,6,7,10,11,12,13,14,17],file_id:[3,17],file_stor:[0,4,10,16,18],file_store_module_path:0,file_store_object_kwarg:0,file_store_object_nam:0,file_uri:11,filenam:[3,6,13,17],filenotfounderror:6,filepath:6,filestor:[4,6,10,13],filt:3,filter:3,find:[3,8,13,14],finish:[3,13],firebas:[13,18],firestor:[13,18],first:[0,10,13,14,18],fit:[13,14,18],flexibl:14,folder:13,follow:[7,13,18,19],fork:12,form:14,format:[7,8,11,13,18],fortun:18,forward:13,found:[0,3,4,6,8,10,12,13,14],frame:[0,10],free:[13,14,18],from:[1,3,4,7,8,11,13,14,18,19],front:[13,18],full:[3,4,8,13,14],full_nam:[3,17],fuzz:8,fuzzywuzzi:8,gather:[8,13,14,18,19],gcs_file_stor:[0,16],gcsfilestor:18,gener:[3,4,8,9,13,18],generate_index:7,get:[0,3,5,6,8,9,10,13,14,18],get_ev:[3,5],get_file_uri:6,get_indexed_event_term:3,get_indexed_minutes_item_term:3,get_legistar_events_for_timespan:8,get_matching_legistar_event_by_minutes_match:8,get_module_vers:0,get_or_upload_algorithm:3,get_or_upload_bodi:3,get_or_upload_ev:3,get_or_upload_event_ent:3,get_or_upload_event_minutes_item:3,get_or_upload_event_top:3,get_or_upload_fil:3,get_or_upload_minutes_item:3,get_or_upload_minutes_item_fil:3,get_or_upload_person:3,get_or_upload_run:3,get_or_upload_run_input:3,get_or_upload_run_input_fil:3,get_or_upload_run_output:3,get_or_upload_run_output_fil:3,get_or_upload_transcript:3,get_or_upload_vot:3,get_raw_transcript:7,get_rout:5,get_single_ev:5,get_transcript_manifest:[0,10],git:[12,13,14,15],github:[12,13,14,15],give:13,given:[3,6,7,8,12],goal:[13,18,19],going:[13,18],good:13,googl:[13,18],google_cloud_sr_model:[0,16],googlecloudsrmodel:[13,18],got:13,govern:18,gracefulli:4,graph:18,great:18,greatli:12,green:3,ground:19,gteq:3,guid:[13,15],had:7,hamburg:13,handl:[4,12,18],happen:[13,18,19],hard:14,harrel:3,has:[0,4,7,8,10,11,13,14,18,19],hash:[6,18],have:[3,5,7,8,13,15,18,19],haven:13,head:14,header:13,hello:7,help:12,here:[9,12,13,14,18],hexdigest:6,high:[13,18],highest:[0,8,10,14],highli:[13,14,18],highlight:7,histori:14,honest:18,horizont:13,host:14,hotli:18,hour:13,hover:13,how:[3,6,12,13,14,18,19],howev:[18,19],http:[3,5,13,14,15],human:3,ibm:13,icing:18,icon:13,idea:[13,18],ident:[13,19],ignor:[5,8],ignore_minutes_item:[5,8],imag:13,implement:[5,18],importantli:18,includ:[12,13,14,19],index:[0,3,9,14,16,17],indexed_event_term:17,indexed_event_term_id:17,indexed_minutes_item_term:17,indexed_minutes_item_term_id:17,indic:[3,6],individu:[3,18],inflat:7,info:[3,5],inform:[4,5,8,13,14,19],infrastructur:14,inher:18,initi:[4,10],input:[3,4],instal:[12,13],instanc:[0,1,3,4,7,10,11,13,14,15,18,19],instead:[1,6,13],instruct:13,integ:[3,17],integr:13,intent:18,interact:[4,13,14,19],interfac:[13,18],interoper:[18,19],introduc:18,involv:13,isn:[6,14],issu:[13,14,18],item:[3,8,9,14,18],join:3,json:[7,8,11,13,18,19],jump:13,jupyt:14,just:[1,7,11,13,14,18],keep:13,kei:[3,9,13,18,19],knowledg:18,known:[4,18],kwarg:[1,3,4,5,6,7,11],label:3,languag:18,larg:[6,18,19],last:13,later:13,launch:13,layout:[18,19],lead:[18,19],least:[3,14],leav:13,left:13,leg:13,legistar:[3,8,18],legistar_cli:5,legistar_ev:8,legistar_event_detail:8,legistar_event_id:[3,14,17],legistar_event_item_id:[3,17],legistar_event_item_vote_id:[3,17],legistar_event_link:[3,17],legistar_matter_attachment_id:[3,17],legistar_person_id:[3,17],legistar_util:[0,16],legistareventscrap:18,legistarlookuperror:5,less:[7,13],let:[13,18],level:[0,18,19],licens:14,like:[7,13,18,19],limit:[3,18],line:13,link:[3,4,13,18],lint:12,list:[3,4,5,8,9,11,14,19],littl:12,live:13,load:4,load_custom_object:[0,16],local:[0,6,7,10,12,14,18],locat:[3,13,18],lock:13,log:[3,4],longer:13,look:[3,8,13,18],lot:13,low:[13,14],lteq:3,machin:[13,18],made:[13,18],mai:[1,5,7,8,13,18],main:[2,14],main_rout:5,maintain:[1,12,13,14],major:[12,18],make:[1,11,12,13,14,18],manag:[4,18],mani:[3,5,6,13,18],manifest:[0,10],manner:18,map:[0,7,10,14,18],mass:13,master:15,match:[3,8,13,14],match_detail:8,match_scor:8,matching_ev:14,matching_minutes_item:14,math:13,matter:[3,13,17],matterattachmentid:3,max_concurrent_request:5,max_synchronous_job:7,mayb:18,mean:[13,14],meant:5,medium:13,meet:[7,14,18],member:[3,14],memori:[7,11],merg:[12,18],metadata:1,method:[3,4,5,7,15,18],metric:13,microsoft:13,middl:19,might:5,mime:3,mime_typ:3,mind:13,minimum:7,minimum_value_allow:7,minor:12,minut:[3,8,9,13,14,18],minutes_file_uri:[3,17],minutes_item:[3,17],minutes_item_corpus_map:9,minutes_item_fil:17,minutes_item_file_id:17,minutes_item_id:[3,17],minutes_item_index_pipelin:[0,16],minutes_items_provid:8,minutesitemindexpipelin:[9,13],missingcredentialserror:[3,6],missingparametererror:3,mission:[14,18],mix:18,mixtur:18,mkdir:13,mobil:14,mode:[12,13],model:[11,19],modul:[14,16,19],modular:[13,14,18,19],module_path:4,month:13,more:[13,14,18],most:[3,14,15,18,19],mount:13,move:13,mozilla:3,much:[13,18],multi:13,multipl:[13,19],multithread:9,must:[13,18],mutuabl:9,name:[0,3,4,6,8,10,13,17],namedtupl:9,namespac:2,nearli:13,neccessari:[6,11],need:[1,8,13,14,15,18,19],network:13,never:18,new_turn_pattern:11,next:[13,18],nice:[13,18],non:[8,18],none:[0,3,4,5,6,9,10,11],normal:13,north:13,nosql:18,note:13,notebook:14,notic:13,now:[12,13,18],number:[3,4,7,10,11],obj:4,object:[0,3,4,5,7,8,9,10,11,14,18,19],object_kwarg:4,object_nam:4,occur:[3,4,8],odd:18,off:7,onc:[12,13,15],one:[13,18],onli:[13,15,18,19],open:[7,13,14,18],oper:[3,7,11,18],option:[0,3,4,6,8,9,10,11,13],order:[0,3,10],order_bi:3,order_by_field:[0,10],ordercondit:3,orderoper:3,org:[3,5,18],origin:[12,18],other:[3,12,13,14,18,19],our:14,out:[14,18],outcom:3,outer:4,outoftimeboundserror:5,output:[3,4,7,11,19],over:[13,18],overal:[3,11],overwrit:[0,1,6,10],own:[13,18],packag:[14,16],page:[13,14],panda:[0,10],paramet:[0,1,3,4,6,7,8,10,11],parameter_opt:3,pars:8,parse_legistar_event_detail:8,parsedev:5,part:4,particular:19,pass:[1,4,7,12,18],past:13,patch:12,path:[0,1,3,4,6,7,9,10,11,14,18],pathlib:[0,1,4,6,7,9,10,11],pedestrian:14,pend:13,peopl:8,per:7,person:[3,8,13,17],person_id:[3,17],personid:3,peter:3,phone:[3,17],phrase:9,pip:[12,13,14,15],pipelin:[0,4,5,8,14,16,19],pks:3,place:[3,13],plai:13,plain:[13,14],platform:13,pleas:[13,14,18],plug:13,point:[13,18],popular:18,portion:[1,19],possibl:[12,13,18],practic:13,pre:13,preemptiv:13,prefer:[3,15],preffer:4,prepend:13,present:3,previou:9,previous:18,primari:[3,13,18,19],primarili:14,print:13,prior:[3,4,5,9,11],privat:13,probabl:[13,18],problem:[13,19],process:[3,5,13,14,15,18],process_ev:9,process_single_ev:[0,16],produc:[8,11,13,14,18,19],programm:13,programmat:14,project:[12,13,15,18,19],prompt:13,properli:[5,13],properti:[0,3,4,7,10,11,18],provi:9,provid:[0,3,4,7,8,10,13,18],provis:13,pstnow:5,publish:13,pull:[12,13],punctuat:19,push:[12,13],pypi:12,python:[4,12,14,15,18],qualiti:[13,18],queri:[3,8,14,18],question:18,quick:13,rais:[6,7],ran:3,rather:7,raw:[7,11],raw_path:11,raw_transcript:7,raw_transcript_save_path:11,read:[6,12,13,14,18],readabl:3,readi:[8,12,13],readm:13,realli:18,reason:13,receiv:[7,13],recent:15,recognit:[11,13,19],recommen:3,recommend:[3,12,13,18],reconnect:13,recurs:12,redshift:13,ref:17,refer:[3,14,18],referenc:3,regard:3,regardless:19,region:13,regist:4,register_input:4,register_output:4,register_run:4,rel:14,relat:[3,13,14,18],releas:14,relev:[3,14],remain:18,rememb:13,remind:12,remov:[4,6,7,13],remove_fil:4,rene:3,replac:[9,13],replica:13,repo:[12,15],repositori:[13,14,15],repres:[4,8,19],request:[6,8,12,13,14,18],requir:[5,13,14,18],research:[10,13,18],research_util:[0,16],resolut:3,resolv:12,resourc:[9,13],respons:[3,8],rest:[5,8,18],result:[3,6,8,13],retain:[1,7],retriev:[3,4,5,13,14,18],reusabl:18,reveal:13,right:13,row:[0,3,4,10],rule:13,run:[3,4,5,7,9,12,14,15,17,18],run_cdp_pipelin:[0,13,16],run_id:[3,17],run_input:17,run_input_fil:17,run_input_file_id:17,run_input_id:17,run_manag:[0,16],run_output:17,run_output_fil:17,run_output_file_id:17,run_output_id:17,runio:4,runmanag:4,safe:13,sai:13,sake:18,same:[0,10,13,19],save:[0,1,6,10,11,18],save_dir:[0,9,10],save_nam:6,save_path:6,schedul:[5,13],schema:[14,18],score:[7,8,9],scrape:18,scraper:5,screen:13,script:[2,13],scrutin:18,search:[3,7,13,14],search_ev:[3,14],search_minutes_item:[3,14],searchabl:14,seattl:[5,8,13,14,15,18],seattle_event_scrap:[0,16],seattlechannel:[5,18],seattleeventscrap:[5,8,18],second:13,section:[13,18,19],see:[14,18],seen:14,select:[0,10,13],select_row_by_id:3,select_rows_as_list:[3,14],selected_ev:8,self:4,sens:18,sentenc:11,separ:8,server:14,servic:[13,14,18],set:[8,12,13,14,18,19],setup:15,sha256:[6,18],share:[13,18],should:[1,3,4,5,7,11,13,14,18,19],shouldn:13,side:13,similar:[13,18],similarli:18,simpl:[11,14,18],simpli:[13,18,19],singl:[1,3,5,7,13,18,19],size:13,slam:18,slightli:19,smaller:[1,13],softwar:14,solut:18,solv:14,some:[13,18],someth:[7,13],somewher:[5,13],soon:13,sort:[3,14],sourc:[0,1,2,3,4,5,6,7,8,9,10,11,17],source_uri:[3,17],spawn:13,speaker:11,spec:18,specif:[7,13,14,18,19],specifi:[13,19],spectrum:18,speech:[11,13,19],speed:13,speicifc:15,split:[1,13],splitter:[1,7],sr_model:[0,16,18],srmodel:11,srmodeloutput:11,stabl:[12,14],stack:18,stage:13,standard:[13,18],start:[3,4,13,18],start_tim:19,state:[1,4,7,18],step:[13,14],stg:13,still:[13,18],storag:[3,5,6,8,13,18],storage_readi:11,store:[0,1,3,4,6,7,8,10,11,13,14,19],store_each_respons:8,str:[0,1,3,4,5,6,7,8,9,10,11],string:[3,4,6,7,8,18,19],structur:19,style:18,subcommitte:3,submit:[12,13],submodul:[12,16],subpackag:16,success:5,sudo:13,sum:18,support:[7,18],sure:[11,12,13],sustain:18,system:[3,8,13,14,18],tabl:[3,4,17],tablenam:3,tag:12,tailor:18,take:[6,18,19],taken:14,tarbal:15,target:[8,14],task:[18,19],task_audio_get_or_copi:9,task_clean_index:9,task_generate_corpu:9,task_generate_index:9,task_parse_and_upload_constructed_ev:9,task_transcript_get_or_cr:9,task_upload_index:9,technic:13,ten:19,term:[3,7,9,13,17,18],termin:[13,15],termresult:3,test:[8,12,13,18],text:[7,8,11,13,14,18,19],tfidf_index:[0,16],tfidfindex:[7,18],than:[3,7],thank:18,thei:[0,8,10,12,13,18,19],them:[14,18],thi:[1,3,4,5,7,8,9,13,14,15,18,19],thing:[13,18],think:1,those:14,though:18,thread:13,three:13,through:[12,15],thu:18,tied:3,tiff:12,time:[4,6,13,18],timespan:8,timestamp:11,timestamped_sent:11,timestamped_sentences_path:11,timestamped_sentences_save_path:11,timestamped_speaker_turn:11,timestamped_speaker_turns_path:11,timestamped_speaker_turns_save_path:11,timestamped_word:11,timestamped_words_path:11,timestamped_words_save_path:11,titl:3,togeth:[13,18],token_set_ratio:8,tool:[13,14,18],top:[0,13],topic:[3,14,18],toward:14,track:[1,3,4],trackabl:14,traffic:13,train:18,trancriptjoin:10,transcipt:11,transcrib:[11,14],transcript:[0,3,7,9,11,13,14,16,17,18],transcript_detail:10,transcript_format:11,transcript_format_typ:19,transcript_id:17,transcript_path:7,transcript_text_port:19,transcriptdatajson:11,transcriptformat:11,transpar:[13,18],trial:13,tricki:18,tupl:[3,4,7,10,11],turn:[11,13,18],two:[8,13],type:[0,1,3,4,5,6,7,8,10,11,13,18],typeerror:7,understand:18,union:[0,1,3,4,5,6,7,9,10,11],uniqu:3,unique_id:[3,7],uniquenesserror:3,unknown:19,unknowntypeorderconditionerror:3,unknowntypewhereconditionerror:3,unless:[13,18],unlik:19,unnam:18,unrecognizedtranscriptformaterror:7,unstructuredorderconditionerror:3,unstructuredwhereconditionerror:3,unsustain:18,until:18,updat:[3,17],upload:[3,4,8,9,13],upload_fil:6,upload_or_update_indexed_event_term:3,upload_or_update_indexed_minutes_item_term:3,upper:13,upward:13,uri:[3,4,5,6,8,9,11,13,17,18],url:3,use:[3,4,5,7,8,9,13,14,15,18],used:[3,4,5,7,8,13,14,18],useful:[1,7],uses:[0,10,13,18],using:[3,13,14,18],usual:18,util:[4,8,10],valid:18,valu:[0,3,4,6,7,9,10,17,18],valuesforterm:9,varchar:17,vari:[13,18],variant:19,variou:13,veri:[11,13,18],version:[3,4,7,11,12,17],via:14,video:[1,3,8,9,18],video_read_path:1,video_uri:[3,9,17],view:[4,13,14],viewabl:13,virtualenv:12,visit:14,vote:[3,8,14,17],vote_id:17,wait:13,want:[6,7,13,14,18],warn:5,watson:13,web:[3,13,14,18],websit:[3,12,14,17,18],webvtt_sr_model:[0,16],webvttsrmodel:11,welcom:[12,18],well:[11,18],were:13,west:13,what:[3,13,14,18],whatev:[13,18],when:[3,4,5,8,12,13],where:[0,1,3,7,10,11,13,18,19],wherecondit:3,whereoper:3,whether:[4,6],which:[0,3,8,10,13,14,18,19],whichev:13,who:[3,18],why:[1,3,7,14],wide:18,wipe:3,wipe_t:3,without:3,won:13,wonder:14,word:[7,9,11],word_event_scor:7,work:[6,12,13,18],world:7,would:[13,14,18],wrap:[13,18],wrap_and_format_transcript_data:11,wrapper:18,write:[13,18],written:13,www:5,yes:18,you:[5,6,8,12,13,15,18,19],your:[12,13,14,15,18],your_development_typ:12,your_name_her:12},titles:["cdptools package","cdptools.audio_splitters package","cdptools.bin package","cdptools.databases package","cdptools.dev_utils package","cdptools.event_scrapers package","cdptools.file_stores package","cdptools.indexers package","cdptools.legistar_utils package","cdptools.pipelines package","cdptools.research_utils package","cdptools.sr_models package","Contributing","Deploying and Running CDP Pipelines","Welcome to cdptools\u2019s documentation!","Installation","cdptools","&lt;no title&gt;","Backend Design","Transcript Format"],titleterms:{about:14,airflow:18,all:14,app_dirs_file_stor:6,audio:18,audio_splitt:1,back:13,backend:18,background:13,bin:2,cdp:13,cdp_instanc:0,cdptool:[0,1,2,3,4,5,6,7,8,9,10,11,14,16],choic:13,citi:14,clone_db:2,cloud_firestore_databas:3,config:0,configur:13,constant:11,content:[0,1,2,3,4,5,6,7,8,9,10,11],contribut:12,databas:[3,18],deploi:[12,13],design:18,dev_util:4,develop:[13,14],document:14,end:13,event:[8,18],event_gather_pipelin:9,event_index_pipelin:9,event_scrap:5,except:[3,5,6,7],featur:14,ffmpeg_audio_splitt:1,file:18,file_stor:6,format:19,from:15,gcs_file_stor:6,get:12,google_cloud_sr_model:11,host:13,index:[7,13,18,19],indic:14,individu:14,instal:[14,15],introduct:[18,19],legistar_util:8,load_custom_object:4,local:13,minutes_item_index_pipelin:9,model:18,modul:[0,1,2,3,4,5,6,7,8,9,10,11,13,18],note:19,packag:[0,1,2,3,4,5,6,7,8,9,10,11],pipelin:[9,13,18],process_single_ev:2,product:13,quickstart:14,raw:19,recognit:18,releas:15,research_util:10,run:13,run_cdp_pipelin:2,run_manag:4,scraper:18,seattle_event_scrap:5,sentenc:19,server:13,setup:13,sourc:15,speaker:19,speech:18,splitter:18,sr_model:11,stabl:15,start:12,store:18,submodul:[0,1,2,3,4,5,6,7,8,9,10,11],subpackag:0,tabl:14,tfidf_index:7,timestamp:19,transcript:[10,19],turn:19,user:14,webvtt_sr_model:11,welcom:14,why:18,word:19}})