import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure
  } from "@chakra-ui/react"
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon
  } from "@chakra-ui/icons"
  import Logo from "../Assets/logo.jpg.jpeg";

  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <Box>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
                                {/* <span> <button className="navbtn">Lets Connect</button></span> */}

          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              <img src={Logo} alt="" className="" style={{marginLeft:'-90px' ,width:'230px',height:'45px', marginBottom:'-30px'}} />
            </Text>
  
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            {/* <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
            >
              Sign In
            </Button> */}
            {/* <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"pink.400"}
              href={"#"}
              _hover={{
                bg: "pink.300"
              }}
            >
              Sign Up
            </Button> */}
                      <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    )
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue("gray.600", "gray.200")
    const linkHoverColor = useColorModeValue("gray.800", "white")
    const popoverContentBgColor = useColorModeValue("white", "gray.800")
  
    return (
      <Stack direction={"row"} spacing={4}>
        {NAV_ITEMS.map(navItem => (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor
                  }}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack >
                    {navItem.children.map(child => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    )
  }
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "pink.400" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    )
  }
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue("white", "gray.800")}
        p={4}
        display={{ md: "none" }}
      >
        {NAV_ITEMS.map(navItem => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    )
  }
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? "#"}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none"
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            align={"start"}
           style={{marginTop:'-12px'}}
          >
            {children &&
              children.map(child => (
                <Link key={child.label} py={2} href={child.href}   className="hoveroption">
                  {child.label}
                
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    )
  }
  
  const NAV_ITEMS = [
    {
      label: "ABOUT",
      children: [
        {
          label: "About Us ",
          href: "/about"
        },
        {
          label: "Our Ventures",
          href: "/ouventure"
        },
        {
          label: "Partners",
          href: "patner"
        },
        
        {
          label: "Contact Us",
          href: "/Contact"
        }
      ]
    },
    {
        label: "CAPABILITIES",
        children: [
          {
            label: "Software Development",
            href: "/proeng"
          },
          {
            label: "Ecommerce Development",
            href: "/Ecommerce"
          },
          {
            label: "Devops",
            href: "/devops"
          },
          {
            label: "Quality Engineering",
            href: "/Quality"
          },
          {
            label: "Cloud Application",
            href: "/Cloudsol"
          },
          {
            label: "AI",
            href: "/Alml"
          }
        ]
      },{
        label: "DEVELOPMENT",
        children: [
          {
            label: "Asaan ERP",
            href: "/sol1"
          },
          {
            label: "Cognitive Edu",
            href: "/sol2"
          },
          {
            label: "Client Connect",
            href: "/sol3"
          },
          {
            label: "Instant Sales",
            href: "/sol5"
          },
          {
            label: "Medease",
            href: "/sol6"
          },
          {
            label: "Agrisense",
            href: "sol4"
          }
          ,{
            label: "Shopify",
            Link: "/shopifydevelopment"
          },
          {
            label: "Magento",
            href: "/magentodevelopment"
          },
          {
            label: "Woocommerce",
            href: "/woocommerce"
          }, {
            label: "E-Commerce App",
            Link: "/Ecommerceapp"
          },
          {
            label: "Shopify App",
            href: "/shopfiyapp"
          },
          {
            label: "Enterprise App",
            href: "/enterprices"
          },{
            label: "Microsoft Dynamic 365",
            Link: "/Dynamic365"
          },
          {
            label: "Odoo",
            href: "/odoo"
          },{
            label: "Learning Management System",
            Link: "/lms"
          },
        ]
      },{
        label: "HIRE DEVELOPER",
        children: [
          {
            label: "Hire Shopify Developer",
            Link: "/hireshopfiy"
          },
          {
            label: "Hire Magento Developer",
            href: "/hiremagento"
          },
          {
            label: "Hire Drupal Developer",
            href: "/hiredrupal"
          }, {
            label: "Hire Opencart Developer",
            href: "/opencart"
          }, {
            label: "Hire Flutter Developer",
            Link: "/flutter"
          },
          {
            label: "Hire Kotlin Developer",
            href: "/kotlin"
          },
          {
            label: "Hire Swift Developer",
            href: "/swift"
          }, {
            label: "Hire Ios App Developer",
            href: "/ios"
          },
          {
            label: "Hire Android App Developer",
            href: "/andriod"
          }, {
            label: "Hire AR App Developer",
            href: "/ar"
          },
          {
            label: "Hire Vuejs Developer",
            Link: "/vuejs"
          },
          {
            label: "Hire Reactjs Developer",
            href: "/reactjs"
          },
          {
            label: "Hire Angularjs Developer",
            subLabel: "Up-and-coming Designers",
            href: "/angular"
          }, {
            label: "Hire Fabricjs Developer",
            href: "fabricjs"
          },
          {
            label: "Hire Mean Stack Developer",
            href: "/mean"
          }, {
            label: "Hire Mean Stack Developer",
            Link: "/mean"
          },
          {
            label: "Hire .Net Developer",
            href: "/net"
          },
          {
            label: "Hire Asp Developer",
            subLabel: "Up-and-coming Designers",
            href: "/asp"
          }, {
            label: "Hire Laravel Developer",
            href: "/laravel"
          },
          {
            label: "Hire Nodejs Developer",
            href: "/nodejs"
          }, {
            label: "Hire Django Developer",
            href: "/django"
          }, {
            label: "Hire Python Developer",
            href: "/pythone"
          },{
            label: "Hire Salesforce Developer",
            Link: "/hiresales"
          },
          {
            label: "Hire Odoo Developer",
            href: "/hireodoo"
          }
          
        ]
      },
      {
        label: "SOLUTIONS",
        children: [
          {
            label: "Asaan ERP",
            href: "/sol1"
          },
          {
            label: "Cognitive Edu",
            href: "/sol2"
          },
          {
            label: "Client Connect",
            href: "/sol3"
          },
          {
            label: "Instant Sales",
            href: "/sol5"
          },
          {
            label: "Medease",
            href: "/sol6"
          },
          {
            label: "Agrisense",
            href: "sol4"
          }
        ]
      }








      
   
  ]
  